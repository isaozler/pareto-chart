import React from 'react';
import { select as d3Select, axisBottom as d3AxisBottom, axisLeft as d3AxisLeft } from 'd3';

interface PathsComponentInterface {
  styles: any;
  padding: number;
  x: any;
  pathData: any;
  line: any;
  showVitalFew: boolean;
  cutOffXPathData: any;
}

interface AxisComponentInterface {
  data: any;
  showBottomAxis: any;
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
}

export const PathsComponent = ({
  styles,
  padding,
  x,
  pathData,
  line,
  showVitalFew,
  cutOffXPathData,
}: PathsComponentInterface) => {
  return (
    <g className={styles.paths}>
      <path
        className={styles.line}
        transform={`translate(${padding + x.bandwidth() / 2}, ${padding})`}
        ref={node => {
          d3Select(node)
            .datum(pathData)
            .attr('d', line);
        }}
      />
      {showVitalFew && (
        <path
          className={styles.lineCutOff}
          transform={`translate(${padding + x.bandwidth() / 2}, ${padding})`}
          ref={node => {
            d3Select(node)
              .datum(cutOffXPathData)
              .attr('d', line);
          }}
        />
      )}
    </g>
  );
};

export const AxisComponent = ({
  data,
  styles,
  showBottomAxis,
  padding,
  chartHeight,
  chartWidth,
  x,
  y,
  p,
  pLabels,
  vitalBreakpointVal,
}: AxisComponentInterface) => {
  const hasVitals = !!data.p.filter((d: number) => d < vitalBreakpointVal).length;
  const isVital = (_: any, i: number) => data.p[i] < vitalBreakpointVal || (!hasVitals && i === 0);
  return (
    <g className="axis">
      {showBottomAxis && (
        <g
          className="axis-bottom"
          transform={`translate(${padding}, ${chartHeight})`}
          ref={node => {
            const [highestVitalFewValue] = data.p.filter(isVital).sort((a: number, b: number) => b - a);
            const tickFilter = (d: any, i: number) => data.p[i] === highestVitalFewValue || data.p.length - 1 === i;
            const callHandler = d3AxisBottom(x).tickValues(x.domain().filter(tickFilter));
            d3Select(node)
              .call(callHandler as any)
              .selectAll('text')
              .attr('y', padding / 2)
              .attr('x', 0)
              .style('text-anchor', 'center');
          }}
        />
      )}
      {!showBottomAxis && (
        <line
          className={styles.lineBottomAxis}
          transform={`translate(${padding}, 0)`}
          ref={node => {
            d3Select(node)
              .attr('x1', 0)
              .attr('x2', chartWidth - padding)
              .attr('y1', chartHeight)
              .attr('y2', chartHeight);
          }}
        />
      )}
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
