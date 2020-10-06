import React, { MutableRefObject as ReactMutableRefObject } from 'react';
import * as d3 from 'd3';
import { GraphData } from './controllers';

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
  const { vitalBreakpointVal } = options;

  const maxYOffsetVal: number = d3.max(data.y) || 0;
  const minYOffsetVal: number = d3.min(data.y) || 0;
  const padding = 20;
  const chartHeight = height - 2 * padding;
  const chartWidth = width - 2 * padding;
  const x = d3
    .scaleBand()
    .range([0, chartWidth - padding])
    .padding(options.barPadding);
  const y = d3.scaleLinear().range([chartHeight, 0]);
  const p = d3.scaleLinear().range([chartHeight, 0]);
  const line = d3
    .line()
    .x((d, i) => x(data.x[i]) || 0)
    .y((d: any, i) => chartHeight - (d.p * chartHeight) / 100 - padding);
  const pLabels = (n: any, index: number): string => {
    if (index === 0 || !n || !!!n) {
      return ``;
    }
    return `${n * 100} %`;
  };
  const pathData = data.p.map((d, i) => ({ x: data.x[i] || '', p: d || 0 })) || null;
  const cutOffXPathData = data.p.map((d, i) => ({ x: data.x[i] || '', p: 100 - vitalBreakpointVal })) || null;
  const bottomLineData = data.p.map((d, i) => ({ x: i, p: 0 }));
  const barHeightOffset = data.p[0] / data.p.length;
  const tooltipHandler = (event: React.MouseEvent<SVGRectElement, MouseEvent>) => {
    const { current: tooltipDiv } = tooltipRef || { current: null };
    const { current: tooltipContentDiv } = tooltipContentRef || { current: null };
    const { label, isVital, count } = event.currentTarget?.dataset || {};
    const isVisible = ['mouseover', 'mousemove'].includes(event.type) ? true : false;

    if (!!tooltipDiv) {
      d3.select(tooltipDiv)
        .style('opacity', isVisible ? 0.9 : 0)
        .style('left', `${event.pageX}px`)
        .style('top', `${event.pageY - 28}px`);
      d3.select(tooltipContentDiv)
        .style('background', isVital === 'true' ? theme.palette.greenBase : theme.palette.redBase)
        .html(`${label}<strong>${count}</strong>`);
    }
  };

  x.domain(data.x);
  y.domain([minYOffsetVal - barHeightOffset, maxYOffsetVal + barHeightOffset]);

  return {
    padding,
    x,
    y,
    p,
    chartHeight,
    chartWidth,
    tooltipHandler,
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
  y,
  chartHeight,
  tooltipHandler,
  vitalBreakpointVal,
  showVitalFew,
}) => {
  let issetVitalFewLine = false;
  const setIssetVitalFewLine = (state: boolean): boolean => {
    issetVitalFewLine = state;
    return true;
  };
  return (
    <g className="bars" transform={`translate(${padding}, 0)`}>
      {data.y.map((value: number, i: number) => {
        const currentX: number = x(data.x[i]) || 0;
        return (
          <>
            <rect
              className={styles.bar}
              x={currentX}
              y={y(value)}
              width={x.bandwidth()}
              height={chartHeight - y(value)}
              fill={data.p[i] > vitalBreakpointVal ? theme.palette.redBase : theme.palette.greenBase}
              data-label={data.tooltipLabel[i]}
              data-count={data.yLabel[i]}
              data-is-vital={data.p[i] < vitalBreakpointVal}
              onMouseOver={tooltipHandler}
              onMouseMove={tooltipHandler}
              onMouseOut={tooltipHandler}
            />
            <>
              {data.p[i] > vitalBreakpointVal && showVitalFew && !issetVitalFewLine && setIssetVitalFewLine(true) && (
                <line
                  className={styles.lineCutOff}
                  transform={`translate(${0}, 0)`}
                  ref={node => {
                    d3.select(node)
                      .attr('x1', currentX + x.bandwidth() / 2)
                      .attr('x2', currentX + x.bandwidth() / 2)
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
