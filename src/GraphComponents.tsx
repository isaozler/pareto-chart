import React from 'react';
import { select as d3Select, axisBottom as d3AxisBottom, axisLeft as d3AxisLeft } from 'd3';
import { css } from 'emotion';

interface PathsComponentInterface {
  theme: any;
  styles: any;
  padding: number;
  chartId: string;
  chartWidth: number;
  chartHeight: number;
  vitalBreakpointVal: number;
  vitalLineColor: string;
  curveLineColor: string;
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
  isInclusive: boolean;
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
  theme,
  styles,
  padding,
  chartId,
  chartWidth,
  vitalBreakpointVal,
  vitalLineColor,
  curveLineColor,
  p,
  xBand,
  pathData,
  line,
  showVitalFew,
}: PathsComponentInterface) => {
  return (
    <g clipPath={`url(#${chartId})`} className={styles.paths}>
      <path
        className={[
          'line--curve',
          styles.line,
          css`
            stroke: ${!!curveLineColor ? curveLineColor : theme.colors.text};
          `,
        ].join(' ')}
        transform={`translate(${padding}, 0)`}
        ref={node => {
          d3Select(node)
            .datum(pathData)
            .attr('d', line);
        }}
      />
      {showVitalFew && (
        <line
          className={[
            'line--horizontal',
            styles.lineCutOff,
            css`
              stroke: ${!!vitalLineColor ? vitalLineColor : theme.palette.brandDanger};
            `,
          ].join(' ')}
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
  isInclusive,
}: AxisComponentInterface) => {
  const hasVitals = !!data.p.filter((d: number) => d < vitalBreakpointVal).length;
  const isVital = (_: any, i: number) => data.p[i] < vitalBreakpointVal || (!hasVitals && i === 0);
  const pList = data.p.filter(isVital).sort((a: number, b: number) => a - b);

  return (
    <g className={['axis', styles.axis].join(' ')}>
      <g
        className="axis-bottom"
        transform={`translate(${padding}, ${chartHeight + 15})`}
        ref={node => {
          const [breakpointXLabel] = data.xAxisLabels
            .filter(
              (_: string, index: number) =>
                !!pList[index] || (isInclusive && pList[index - 1] < vitalBreakpointVal && !pList[index + 1])
            )
            .reverse();
          const xPAxis = d3AxisBottom(xPBand).tickValues([breakpointXLabel, '100 %']);

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
