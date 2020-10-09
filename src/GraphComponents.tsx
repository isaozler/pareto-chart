import React from 'react';
import { select as d3Select, axisBottom as d3AxisBottom, axisLeft as d3AxisLeft } from 'd3';
import { tickFilter } from './utils';

interface PathsComponentInterface {
  styles: any;
  padding: number;
  chartId: string;
  chartWidth: number;
  chartHeight: number;
  vitalBreakpointVal: number;
  x: any;
  p: any;
  y: any;
  xBand: any;
  pathData: any;
  line: any;
  showVitalFew: boolean;
  cutOffXPathData: any;
}

interface AxisComponentInterface {
  data: any;
  padding: number;
  styles: any;
  line: any;
  vitalBreakpointVal: number;
  bottomLineData: any;
  chartHeight: number;
  chartWidth: number;
  x: any;
  y: any;
  p: any;
  pLabels: any;
  xPBand: any;
}

export const PathsComponent = ({
  styles,
  padding,
  chartId,
  chartWidth,
  vitalBreakpointVal,
  p,
  xBand,
  pathData,
  line,
  showVitalFew,
}: PathsComponentInterface) => {
  return (
    <g clipPath={`url(#${chartId})`} className={styles.paths}>
      <path
        className={['line--curve', styles.line].join(' ')}
        transform={`translate(${padding}, 0)`}
        ref={node => {
          d3Select(node)
            .datum(pathData)
            .attr('d', line);
        }}
      />
      {showVitalFew && (
        <line
          className={['line--horizontal', styles.lineCutOff].join(' ')}
          transform={`translate(${padding + xBand.bandwidth() / 2}, 0)`}
          ref={node => {
            d3Select(node)
              .attr('x1', 0)
              .attr('x2', chartWidth - padding)
              .attr('y1', p(vitalBreakpointVal / 100))
              .attr('y2', p(vitalBreakpointVal / 100));
          }}
        />
      )}
    </g>
  );
};

export const AxisComponent = ({
  data,
  styles,
  padding,
  chartHeight,
  chartWidth,
  x,
  xPBand,
  y,
  p,
  pLabels,
  vitalBreakpointVal,
}: AxisComponentInterface) => {
  const hasVitals = !!data.p.filter((d: number) => d < vitalBreakpointVal).length;
  const isVital = (_: any, i: number) => data.p[i] < vitalBreakpointVal || (!hasVitals && i === 0);

  return (
    <g className={['axis', styles.axis].join(' ')}>
      <g
        className="axis-bottom"
        transform={`translate(${padding}, ${chartHeight + 15})`}
        ref={node => {
          const [highestVitalFewValue] = data.p.filter(isVital).sort((a: number, b: number) => b - a);
          const i: number = data.p.findIndex((pV: number) => pV === highestVitalFewValue);
          const filterHandler = tickFilter(data.xAxisLabels[i + 1], data.p.length - 1);
          const xPAxis = d3AxisBottom(xPBand).tickValues(data.xAxisLabels.filter(filterHandler));

          d3Select(node)
            .call(xPAxis as any)
            .selectAll('text')
            .attr('y', padding / 2)
            .attr('x', 0)
            .style('text-anchor', 'center');
        }}
      />
      <line
        className={styles.lineBottomAxis}
        transform={`translate(${padding}, ${1})`}
        ref={node => {
          d3Select(node)
            .attr('x1', 0)
            .attr('x2', chartWidth - padding)
            .attr('y1', chartHeight)
            .attr('y2', chartHeight);
        }}
      />
      <g
        className="axis-left"
        transform={`translate(${padding}, 0)`}
        ref={node => {
          d3Select(node).call(d3AxisLeft(y).ticks(chartHeight / 30) as any);
        }}
      />
      <g
        className="axis-right"
        transform={`translate(${chartWidth + padding}, 0)`}
        ref={node => {
          d3Select(node).call(
            d3AxisLeft(p)
              .ticks(4)
              .tickFormat(pLabels) as any
          );
        }}
      />
    </g>
  );
};
