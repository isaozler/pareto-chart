import React, { useRef } from 'react';
import { PanelProps } from '@grafana/data';
import { ParetoOptions } from 'types';
import { css, cx } from 'emotion';
import * as d3 from 'd3';
import { stylesFactory, useTheme } from '@grafana/ui';
import { PanelDataController } from './controllers';

interface Props extends PanelProps<ParetoOptions> {}

export const ParetoPanel: React.FC<Props> = ({ options, data, width, height }) => {
  if (!data || !!!data.series.length) {
    return <>No Data</>;
  }

  const theme = useTheme();
  const styles = getStyles();
  const tooltipRef = useRef(null);
  const tooltipContentRef = useRef(null);
  const { vitalBreakpointVal, showVitalFew, showBottomAxis } = options;
  const PanelData = new PanelDataController(data);
  const graphData = PanelData.getResults();
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
      <div ref={tooltipRef} className={styles.tooltipContainer}>
        <div ref={tooltipContentRef} className={styles.tooltip} />
      </div>
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
                    className={styles.bar}
                    x={currentX}
                    y={y(value)}
                    width={x.bandwidth()}
                    height={chartHeight - y(value)}
                    fill={graphData.p[i] > vitalBreakpointVal ? theme.palette.redBase : theme.palette.greenBase}
                    data-label={graphData.x[i]}
                    data-count={value}
                    data-is-vital={graphData.p[i] < vitalBreakpointVal}
                    onMouseOver={tooltipHandler}
                    onMouseMove={tooltipHandler}
                    onMouseOut={tooltipHandler}
                  />
                  <>
                    {graphData.p[i] > vitalBreakpointVal &&
                      showVitalFew &&
                      !issetVitalFewLine &&
                      setIssetVitalFewLine(true) && (
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
  const theme = useTheme();

  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    tooltipContainer: css`
      position: fixed;
      z-index: 100;
      min-width: 20vw;
      display: flex;
    `,
    tooltip: css`
      position: absolute;
      bottom: 0;
      left: 0;
      border: 1px solid ${theme.colors.border2};
      padding: 4px 10px;
      max-width: 100%;
      color: white;

      strong {
        position: absolute;
        top: -1px;
        left: 100%;
        padding: 4px;
        bottom: -1px;
        min-width: 50px;
        text-align: center;
        background: inherit;
        border: 1px solid ${theme.colors.border2};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
      }
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
    bar: css`
      cursor: pointer;
    `,
    line: css`
      fill: none;
      stroke: ${theme.isDark ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.5)'};
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
