import React from 'react';
import { PanelProps } from '@grafana/data';
import { ParetoOptions } from 'types';
import { css, cx } from 'emotion';
import * as d3 from 'd3';
import { stylesFactory, useTheme } from '@grafana/ui';

interface Props extends PanelProps<ParetoOptions> {}
interface GraphData {
  x: string[];
  y: number[];
  p: number[];
  [key: string]: any;
}

export const ParetoPanel: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme();
  const styles = getStyles();
  const { vitalBreakpointVal, showVitalFew, showBottomAxis } = options;
  const [serie] = data.series;
  const { fields } = serie;
  const [xData, yData] = fields;
  let yValues: number[] = yData.values.toArray();
  // yValues = [92, 83, 75, 59, 53, 27, 16, 9, 7, 4, 3, 1];
  const yValuesSum: number = yValues.reduce((a, d) => a + d, 0);
  let xValues: string[] = xData.values.toArray().map((d, i) => `T${i + 1}`);
  const graphData: GraphData = yValues
    .map((d, i) => ({ x: xValues[i], y: d }))
    .sort((a, b) => b.y - a.y)
    .reduce(
      (result: GraphData, d, i) => {
        return {
          ...result,
          x: [...result.x, d.x],
          y: [...result.y, d.y],
          p: [...result.p, (result?.p[i - 1] ? result.p[i - 1] : 0) + (d.y * 100) / yValuesSum],
        };
      },
      { x: [], y: [], p: [] }
    );
  const maxYOffsetVal = d3.max(graphData.y) || 0;
  const minYOffsetVal = d3.min(graphData.y) || 0;
  const padding = 20;
  const chartHeight = height - 2 * padding;
  const chartWidth = width - 2 * padding;
  const x = d3
    .scaleBand()
    .rangeRound([0, chartWidth])
    .padding(options.barPadding);
  const y = d3.scaleLinear().rangeRound([chartHeight, 0]);
  const p = d3.scaleLinear().rangeRound([chartHeight, 0]);

  const lineX = d3
    .scaleBand()
    .rangeRound([0, chartWidth])
    .padding(options.barPadding);
  const line = d3
    .line()
    .x((d, i) => lineX(graphData.x[i]) || 0)
    .y((d: any, i) => chartHeight - (d.p * chartHeight) / 100 - padding);
  const pLabels = (n: any, index: number): string => {
    if (index === 0 || !n || !!!n) {
      return ``;
    }
    return `${n * 100}%`;
  };
  const pathData = graphData.p.map((d, i) => ({ x: graphData.x[i] || '', p: d || 0 })) || null;
  const cutOffXPathData = graphData.p.map((d, i) => ({ x: graphData.x[i] || '', p: vitalBreakpointVal })) || null;
  const barHeightOffset = graphData.p[0] / graphData.p.length;
  let issetVitalFewLine = false;
  const setIssetVitalFewLine = (state: boolean): boolean => {
    issetVitalFewLine = state;
    return true;
  };

  x.domain(graphData.x);
  y.domain([minYOffsetVal - barHeightOffset, maxYOffsetVal + barHeightOffset]);
  lineX.domain(graphData.x);

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <svg
        className={styles.svg}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={`0 0 ${width} ${height}`}
      >
        <g transform={`translate(${padding}, ${padding})`} className="wrapper">
          <g className="bars" transform={`translate(${padding}, 0)`}>
            {graphData.y.map((value: number, i: number) => {
              const currentX: number = x(graphData.x[i]) || 0;
              return (
                <>
                  <rect
                    x={currentX}
                    y={y(value)}
                    width={x.bandwidth()}
                    height={chartHeight - y(value)}
                    fill={graphData.p[i] > vitalBreakpointVal ? theme.palette.redBase : theme.palette.greenBase}
                  />
                  <>
                    {graphData.p[i] > vitalBreakpointVal &&
                      showVitalFew &&
                      !issetVitalFewLine &&
                      setIssetVitalFewLine(true) && (
                        <line
                          className={styles.lineCutOff}
                          transform={`translate(${padding + x.bandwidth() / 2}, 0)`}
                          ref={node => {
                            d3.select(node)
                              .attr('x1', currentX - x.bandwidth())
                              .attr('x2', currentX - x.bandwidth())
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
          <g className={styles.paths}>
            <path
              className={styles.line}
              transform={`translate(${padding + x.bandwidth() / 2}, ${padding})`}
              ref={node => {
                d3.select(node)
                  .datum(pathData)
                  .attr('d', (d: any) => line(d));
              }}
            />
            {showVitalFew && (
              <path
                className={styles.lineCutOff}
                transform={`translate(${padding + x.bandwidth() / 2}, ${padding})`}
                ref={node => {
                  d3.select(node)
                    .datum(cutOffXPathData)
                    .attr('d', (d: any) => line(d));
                }}
              />
            )}
          </g>
          <g className="axis">
            {showBottomAxis && (
              <g
                transform={`translate(${padding}, ${chartHeight})`}
                ref={node => {
                  d3.select(node).call(d3.axisBottom(x) as any);
                }}
              />
            )}
            <g
              transform={`translate(${padding}, ${0})`}
              ref={node => {
                d3.select(node).call(d3.axisLeft(y) as any);
              }}
            />
            <g
              transform={`translate(${chartWidth + padding}, ${0})`}
              ref={node => {
                d3.select(node).call(
                  d3
                    .axisLeft(p)
                    .ticks(5)
                    .tickFormat(pLabels) as any
                );
              }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
    line: css`
      fill: none;
      stroke: white;
      stroke-width: 2px;
    `,
    lineCutOff: css`
      fill: none;
      stroke: rgba(255, 0, 0, 0.75);
      stroke-width: 2px;
      stroke-dasharray: 5px;
    `,
    paths: css`
      position: relative;
    `,
  };
});
