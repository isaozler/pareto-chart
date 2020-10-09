import React, { useLayoutEffect, useEffect, useCallback } from 'react';
import { getStyles } from './styles';
import {
  select as d3Select,
  scaleLinear as d3ScaleLinear,
  scaleBand as d3ScaleBand,
  brushX as d3BrushX,
  event as d3Event,
  axisLeft as d3AxisLeft,
} from 'd3';
import { getTextLabelClass } from './utils';

export const BrushComponent = (props: any) => {
  const styles = getStyles();
  let initXDomain: any = null;
  let initBandWidth: any = null;
  let lastSelection: any = null;
  const minLimitSelection = 5;
  let idleTimeout: any = null;
  let idleDelay = 350;
  const idled = () => {
    idleTimeout = null;
  };
  const checkXBand = d3ScaleBand()
    .range([0, props.chartWidth - props.padding])
    .padding(props.barPadding);

  checkXBand.domain(props.data.xAxisLabels);

  const brushCalcHandler = () => {
    const svg = d3Select(props.svgRef.current);
    const { selection } = d3Event || {};

    if (!!selection) {
      const barCount = props.data.xAxisLabels.length;
      const xCheck = d3ScaleLinear().range([0, props.chartWidth]);

      xCheck.domain(selection.map(props.xLinear.invert, props.xLinear));

      let [xStart] = props.xLinear.domain();
      const [xPartStart, xPartEnd] = xCheck.domain();
      const selectedPart = xPartEnd - xPartStart;
      const percentage = Math.floor((selectedPart * 100) / (barCount - xStart));
      const isValidLimit = percentage >= minLimitSelection;

      svg
        .select('rect.selection')
        .classed('selection--valid', isValidLimit)
        .classed('selection--invalid', !isValidLimit);
    }
  };
  const brushHandler = () => {
    const svg = d3Select(props.svgRef.current);
    const { selection } = d3Event || {};

    if (!initXDomain || !initBandWidth) {
      initXDomain = props.x.domain();
      initBandWidth = props.xBand.bandwidth();
    }

    if (!!selection) {
      props.x.domain(selection.map(props.xLinear.invert, props.xLinear));

      const barCount = props.data.xAxisLabels.length;
      let [xStart] = props.xLinear.domain();
      const [xPartStart, xPartEnd] = props.x.domain();
      const selectedPart = xPartEnd - xPartStart;
      const percentage = Math.floor((selectedPart * 100) / (barCount - xStart));

      if (percentage < minLimitSelection) {
        svg.select('.brush').call(brush.move as any, lastSelection);
        return;
      }

      lastSelection = selection;
      const initWidth = props.chartWidth - props.padding;
      const newEndRange = (100 / percentage) * initWidth;

      props.xBand
        .range([0, newEndRange])
        .padding(props.barPadding)
        .domain(props.data.xAxisLabels);
      props.xBand.domain(props.data.xAxisLabels);
    } else {
      if (!idleTimeout) {
        idleTimeout = setTimeout(idled, idleDelay);
        svg.select('.brush').call(brush.move as any, lastSelection);
        return;
      }

      const resetRange: [number, number] = [0, props.chartWidth - props.padding];
      lastSelection = null;
      props.x.domain(initXDomain);
      props.xBand
        .range(resetRange)
        .padding(props.barPadding)
        .domain(props.data.xAxisLabels);
    }
    zoom();
  };
  const brush = d3BrushX()
    .extent([
      [0, 0],
      [props.chartWidth - props.padding, 10],
    ])
    .on('brush', brushCalcHandler)
    .on('end', brushHandler);
  const zoom = () => {
    const svg = d3Select(props.svgRef.current);

    if (!!svg) {
      const transition: any = d3Select(props.svgRef.current)
        ?.transition()
        .duration(750);

      svg
        .select('.axis-left')
        .transition(transition)
        .call(d3AxisLeft(props.y) as any);
      svg
        .select('.axis-right')
        .transition(transition)
        .call(
          d3AxisLeft(props.p)
            .ticks(4)
            .tickFormat(props.pLabels) as any
        );

      let i = 0;
      let issetVitalFewLine = false;
      const bandWidth = props.xBand.bandwidth();
      const bandWidth50 = bandWidth / 2;

      svg.selectAll(`rect.${styles.bar}`).each(function(this: any) {
        if (this.dataset) {
          const newCurrentX: number = props.x(i) - bandWidth50;

          d3Select(this)
            .transition(transition)
            .attr('x', newCurrentX)
            .attr('width', bandWidth);

          if (props.showVitalFew && props.data.p[i] > props.vitalBreakpointVal && !issetVitalFewLine) {
            issetVitalFewLine = true;
            const xPos = newCurrentX + bandWidth50;

            svg
              .select('.line--vertical')
              .transition(transition)
              .attr('x1', xPos)
              .attr('x2', xPos)
              .attr('y1', 0)
              .attr('y2', props.chartHeight);
          }
        }

        i++;
      });

      if (props.showBarValue) {
        const step = Math.trunc(props.chartWidth / 10 / bandWidth);

        svg.selectAll(`text.${styles.barValue}`).each(function(this: any) {
          const { index } = this.dataset;
          const newCurrentX: number = props.x(+index) - bandWidth50;
          const textLabelClass = getTextLabelClass(bandWidth, styles, +index, step);

          d3Select(this)
            .transition(transition)
            .attr('class', [styles.barValue, textLabelClass].join(' '))
            .attr('x', newCurrentX + bandWidth50);
        });
      }

      const yPos = props.p(props.vitalBreakpointVal / 100);

      svg
        .select('.line--horizontal')
        .transition(transition)
        .attr('x1', 0)
        .attr('x2', props.chartWidth - props.padding)
        .attr('y1', yPos)
        .attr('y2', yPos);

      svg
        .select('.line--curve')
        .datum(props.pathData)
        .transition(transition)
        .attr('transform', `translate(${props.padding}, 0)`)
        .attr('d', props.line as any);
    }
  };

  const resetChart = useCallback(() => {
    d3Select(props.svgRef.current)
      .select('.brush')
      .call(brush.move as any, null);

    brushHandler();
  }, [d3Select, brushHandler]);

  useLayoutEffect(() => {
    resetChart();
  }, []);

  useEffect(() => {
    resetChart();
  }, [props.data, resetChart]);

  return (
    <g
      transform={`translate(${2 * props.padding}, ${props.padding + props.chartHeight + 3})`}
      className={['brush', styles.brushWrapper].join(' ')}
      ref={node => {
        d3Select(node).call(brush as any);
      }}
    />
  );
};
