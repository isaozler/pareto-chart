import React, { MutableRefObject as ReactMutableRefObject } from 'react';
import {
  select as d3Select,
  max as d3Max,
  min as d3Min,
  scaleLinear as d3ScaleLinear,
  scaleBand as d3ScaleBand,
  line as d3Line,
  curveBasis as d3LineCurve,
} from 'd3';
import { GraphData } from './controllers';
import { getTextLabelClass } from './utils';

export interface BarGraphSettings {
  options: any;
  width: number;
  height: number;
}

interface BarGraphRefs {
  theme: any;
  tooltipRef: ReactMutableRefObject<null>;
  tooltipContentRef: ReactMutableRefObject<null>;
}

export function BarGraph(
  data: GraphData,
  { options, width, height }: BarGraphSettings,
  { theme, tooltipRef, tooltipContentRef }: BarGraphRefs
) {
  const { vitalBreakpointVal, isCopyLabelVisible } = options;
  const contents = {
    initCopyText: 'Click on bar to copy data',
    copyText: '',
    dataCopied: 'Copied data!',
  };
  const maxYOffsetVal: number = d3Max(data.y) || 0;
  const minYOffsetVal: number = d3Min(data.y) || 0;
  const padding = 20;
  const chartHeight = height - 3 * padding;
  const chartWidth = width - 2 * padding;
  const xBand = d3ScaleBand()
    .range([0, chartWidth - padding])
    .padding(options.barPadding);
  const xPBand = d3ScaleBand()
    .range([0, chartWidth - padding])
    .padding(options.barPadding)
    .paddingOuter(0.6);
  const xLinear = d3ScaleLinear().range([0, chartWidth - padding]);
  const x = d3ScaleLinear().range([0, chartWidth - padding]);
  const y = d3ScaleLinear().range([chartHeight, 0]);
  const p = d3ScaleLinear().range([chartHeight, 0]);
  const line = d3Line()
    .curve(d3LineCurve)
    .x((d, i) => x(i) || 0)
    .y((d: any) => p(d.p / 100));
  const pLabels = (n: any, index: number): string => {
    if (index === 0 || !n || !!!n) {
      return ``;
    }
    return `${n * 100} %`;
  };
  const pathData = data.p.map((d, i) => ({ x: data.xAxisLabels[i] || '', p: d || 0 })) || null;
  const cutOffXPathData = data.p.map((d, i) => ({ x: data.xAxisLabels[i] || '', p: vitalBreakpointVal })) || null;
  const bottomLineData = data.p.map((d, i) => ({ x: i, p: 0 }));
  const barHeightOffset = data.p[0] / data.p.length;
  const getCopyLabel = (text: string) =>
    `<span class="tooltip-copy-label ${!isCopyLabelVisible ? 'hidden' : ''}">${text}</span>`;
  const tooltipHandler = (event: React.MouseEvent<SVGRectElement, MouseEvent>) => {
    const { current: tooltipDiv } = tooltipRef || { current: null };
    const { current: tooltipContentDiv } = tooltipContentRef || { current: null };
    const { labelHeader, label: labelValue, isVital, count } = event.currentTarget?.dataset || {};
    const isVisible = ['mouseover', 'mousemove'].includes(event.type) ? true : false;

    if (event.type === 'mouseout') {
      contents.copyText = contents.initCopyText;
    }

    if (!!tooltipDiv) {
      d3Select(tooltipDiv)
        .style('opacity', isVisible ? 0.9 : 0)
        .style('left', isVisible ? `${event.pageX}px` : '1000vw')
        .style('top', isVisible ? `${event.pageY - 28}px` : '-1000vh');
      d3Select(tooltipContentDiv).style(
        'background',
        isVital === 'true' ? theme.palette.greenBase : theme.palette.redBase
      ).html(`<label class="label-header">${labelHeader}
        ${!!contents.copyText ? getCopyLabel(contents.copyText) : ''}</label>
        <label class="label-value">Percentage of sum: ${labelValue}</label>
        <strong>${count}</strong>
      `);
    }
  };
  const barClickHandler = (event: React.MouseEvent<SVGRectElement, MouseEvent>) => {
    const content = event.currentTarget?.dataset.labelHeader || 'No Content';
    const textField = document.createElement('textarea');
    textField.innerText = content;
    const appendTo = !!tooltipRef.current ? tooltipRef.current : document.body;

    if (!!appendTo) {
      appendTo.appendChild(textField);
    }

    textField.select();
    document.execCommand('copy');

    const tooltipCopyLabelEl: HTMLCollectionOf<Element> = document.getElementsByClassName('tooltip-copy-label');
    const labelElement: Element = tooltipCopyLabelEl[0];
    labelElement.innerHTML = contents.dataCopied;

    textField.remove();
  };
  const yDomainMin = minYOffsetVal - barHeightOffset > 0 ? minYOffsetVal - barHeightOffset : 0;

  xBand.domain(data.xAxisLabels);
  xPBand.domain(data.xAxisLabels);
  xLinear.domain([-1, data.x.length]);
  x.domain([-1, data.x.length]);
  p.domain([0, 1]);
  y.domain([yDomainMin, maxYOffsetVal + barHeightOffset]);

  return {
    padding,
    x,
    xBand,
    xPBand,
    xLinear,
    y,
    p,
    chartHeight,
    chartWidth,
    tooltipHandler,
    barClickHandler,
    line,
    pathData,
    cutOffXPathData,
    bottomLineData,
    pLabels,
    Component,
  };
}

const Component: React.FC<any> = ({
  data,
  styles,
  theme,
  padding,
  x,
  xBand,
  y,
  chartHeight,
  chartWidth,
  tooltipHandler,
  barClickHandler,
  vitalBreakpointVal,
  showVitalFew,
  showBarValue,
  valToFixed,
  chartId,
}) => {
  let issetVitalFewLine = false;
  const setIssetVitalFewLine = (state: boolean): boolean => {
    issetVitalFewLine = state;
    return true;
  };
  const hasVitals = !!data.p.filter((d: number, i: number) => d < vitalBreakpointVal).length;
  const bandwidth = xBand.bandwidth() * 0.9;

  return (
    <g clipPath={`url(#${chartId})`} className="bars" transform={`translate(${padding}, 0)`}>
      {data.y.map((val: number, i: number) => {
        const currentX: number = x(i) - bandwidth / 2;
        const step = Math.trunc(chartWidth / 10 / bandwidth);
        const label = typeof val === 'number' && valToFixed >= 0 ? val.toFixed(valToFixed) : val;
        const isForcedHidden = !showBarValue;
        const visibilityClassName = isForcedHidden ? styles.forcedHidden.__barLabel : '';
        const BarLabel = ({ index, className }: any) => (
          <text
            data-index={index}
            transform={`translate(0, -${padding / 2})`}
            className={[className, styles.barValue, visibilityClassName].join(' ')}
            x={currentX + bandwidth / 2}
            y={y(val)}
          >
            {label}
          </text>
        );
        const isVital = data.p[i] < vitalBreakpointVal || (!hasVitals && i === 0);
        const textLabelClass = getTextLabelClass(bandwidth, styles, i, step);
        return (
          <>
            <rect
              className={styles.bar}
              fill={isVital ? theme.palette.greenBase : theme.palette.redBase}
              data-label-header={data.x[i]}
              data-label={data.tooltipLabel[i]}
              data-count={val}
              data-is-vital={isVital}
              onMouseUp={barClickHandler}
              onMouseOver={tooltipHandler}
              onMouseMove={tooltipHandler}
              onMouseOut={tooltipHandler}
              ref={node => {
                d3Select(node)
                  .attr('x', currentX)
                  .attr('y', y(val))
                  .attr('width', bandwidth)
                  .attr('height', chartHeight - y(val));
              }}
            />
            <BarLabel index={i} className={['bar-values', textLabelClass].join(' ')} />
            <>
              {!isVital && showVitalFew && !issetVitalFewLine && setIssetVitalFewLine(true) && (
                <line
                  className={['line--vertical', styles.lineCutOff].join(' ')}
                  transform={`translate(${0}, 0)`}
                  ref={node => {
                    d3Select(node)
                      .attr('x1', currentX + bandwidth / 2)
                      .attr('x2', currentX + bandwidth / 2)
                      .attr('y1', 0)
                      .attr('y2', chartHeight);
                  }}
                />
              )}
            </>
          </>
        );
      })}
    </g>
  );
};
