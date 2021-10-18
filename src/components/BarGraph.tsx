import React from 'react';
import {
  select as d3Select,
  max as d3Max,
  min as d3Min,
  scaleLinear as d3ScaleLinear,
  scaleBand as d3ScaleBand,
  line as d3Line,
  curveBasis as d3LineCurve,
} from 'd3';
import { css } from 'emotion';
import { GraphData } from '../helpers/schema';
import { getTextLabelClass, debounce, camelCase } from '../helpers/utils';
import { eventBus } from '../helpers/eventBus';
import { CONSTANTS } from '../helpers/constants';
import { BarGraphSettings } from 'helpers/schema';

export function BarGraph(data: GraphData, { options, width, height }: BarGraphSettings) {
  const { vitalBreakpointVal } = options;
  const maxYOffsetVal: number = d3Max(data.y) || 0;
  const minYOffsetVal: number = d3Min(data.y) || 0;
  const padding = 20;
  const chartHeight = height - 3 * padding;
  const chartWidth = width - 2 * padding;
  const barPadding = options.barPadding < 1 ? options.barPadding : options.barPadding / 10;
  const xBand = d3ScaleBand()
    .range([0, chartWidth - padding])
    .padding(barPadding);
  const xPBand = d3ScaleBand()
    .range([0, chartWidth - padding])
    .padding(barPadding)
    .paddingOuter(0.6);
  const xLinear = d3ScaleLinear().range([0, chartWidth - padding]);
  const x = d3ScaleLinear().range([0, chartWidth - padding]);
  const y = d3ScaleLinear().range([chartHeight, 0]);
  const p = d3ScaleLinear().range([chartHeight, 0]);
  const line = d3Line()
    .curve(d3LineCurve)
    .x((_, i) => x(i) || 0)
    .y((d: any) => (!!d ? p(d.p / 100) : d));
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
  vitalBreakpointVal,
  barTextFontSize,
  barTextRotation,
  isInclusive,
  showVitalFew,
  showBarValue,
  showBarText,
  valToFixed,
  chartId,
  vitalColor,
  vitalLineColor,
  trivialColor,
  barHoverColor,
  barLabelColor,
}) => {
  const hasVitals = !!data.p.filter((d: number, i: number) => d < vitalBreakpointVal).length;
  const bandwidth = xBand.bandwidth() * 0.9;
  const barClickHandler = (event: any) => eventBus.dispatch(`${chartId}-${CONSTANTS.E_TOOLTIP_CLICK}`, event);
  const barMoveHandler = (event: any) => eventBus.dispatch(`${chartId}-${CONSTANTS.E_TOOLTIP_MOVE}`, event);
  const debouncedClickHandler = debounce(barClickHandler, 200);
  const debouncedMoveHandler = debounce(barMoveHandler, 200);
  const getFillColor = (isVital: boolean) =>
    isVital
      ? !!vitalColor
        ? camelCase(vitalColor)
        : theme.palette.brandDanger
      : !!trivialColor
      ? camelCase(trivialColor)
      : theme.palette.brandWarning;
  let showVitalVerticalLineIndex = 0;
  const maxValueOffset = Math.max(...data.y).toString().length * barTextFontSize + 20;

  return (
    <g clipPath={`url(#${chartId})`} className="bars" transform={`translate(${padding}, 0)`}>
      {data.y.map((val: number, i: number) => {
        const currentX: number = x(i) - bandwidth / 2;
        const step = Math.trunc(chartWidth / 10 / bandwidth);
        const defaultFixedVal = 2;
        const maxFixedVal = 6;
        const label =
          typeof val === 'number' && valToFixed >= 0
            ? val.toFixed(valToFixed > maxFixedVal ? defaultFixedVal : valToFixed)
            : val;
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
        const BarText = ({ index, className, x: propX }: any) => (
          <g
            id={`barTextGroup-${index}`}
            className={styles.barTextGroup}
            ref={node => {
              d3Select(node).style(
                'transform',
                `translate(${propX + bandwidth / 2 + barTextFontSize / 2}px, ${chartHeight -
                  10}px) rotate(${barTextRotation}deg)`
              );
            }}
          >
            <text
              data-index={index}
              className={[className, styles.barText].join(' ')}
              style={{
                fontSize: `${barTextFontSize}px`,
                fill: barLabelColor,
                fontWeight: 'bold',
              }}
            >
              {val}
            </text>
            <text
              data-index={index}
              className={[className, styles.barText].join(' ')}
              style={{
                fontSize: `${barTextFontSize}px`,
                fill: barLabelColor,
                transform: `translate(${maxValueOffset}px, 0)`,
              }}
            >
              {data.x[i]} - {data.tooltipLabel[i]}
            </text>
          </g>
        );
        let isVital;

        if (!hasVitals && i === 0) {
          isVital = true;
        } else if (data.p[i] < vitalBreakpointVal && !isInclusive) {
          isVital = true;
        } else if (isInclusive && (data.p[i - 1] < vitalBreakpointVal || i === 0)) {
          isVital = true;
        } else {
          isVital = false;
        }

        showVitalVerticalLineIndex =
          !hasVitals && i === 0
            ? 0
            : data.p[i] < vitalBreakpointVal && !isInclusive
            ? i
            : isInclusive && data.p[i - 1] < vitalBreakpointVal
            ? i
            : showVitalVerticalLineIndex;
        const textLabelClass = getTextLabelClass(bandwidth, styles, i, step);

        return (
          <>
            <rect
              className={[
                styles.bar,
                !!barHoverColor
                  ? css`
                      &:hover {
                        fill: ${camelCase(barHoverColor)} !important;
                      }
                    `
                  : '',
              ].join(' ')}
              fill={getFillColor(isVital)}
              data-label-header={data.x[i]}
              data-label={data.tooltipLabel[i]}
              data-label2={`${data.p[i].toFixed(2)}%`}
              data-count={val}
              data-is-vital={isVital}
              data-fill-color={getFillColor(isVital)}
              onMouseUp={({ currentTarget }) => debouncedClickHandler({ currentTarget })}
              onMouseOver={({ currentTarget, type, pageX, pageY }) =>
                debouncedMoveHandler({ currentTarget, type, pageX, pageY })
              }
              onMouseMove={({ currentTarget, type, pageX, pageY }) =>
                debouncedMoveHandler({ currentTarget, type, pageX, pageY })
              }
              onMouseOut={({ currentTarget, type, pageX, pageY }) =>
                debouncedMoveHandler({ currentTarget, type, pageX, pageY })
              }
              ref={node => {
                d3Select(node)
                  .attr('x', currentX)
                  .attr('y', y(val))
                  .attr('width', bandwidth)
                  .attr('height', chartHeight - y(val));
              }}
            />
            <BarLabel index={i} className={['bar-values', textLabelClass].join(' ')} />
            {showBarText ? <BarText index={i} className={['bar-text'].join(' ')} x={currentX} /> : <></>}
            <>
              {showVitalFew && i === data.y.length - 1 && (
                <line
                  className={[
                    'line--vertical',
                    styles.lineCutOff,
                    css`
                      stroke: ${!!vitalLineColor ? vitalLineColor : 'rgba(255, 0, 0, 0.75)'};
                    `,
                  ].join(' ')}
                  transform={`translate(${0}, 0)`}
                  ref={node => {
                    d3Select(node)
                      .attr('x1', x(showVitalVerticalLineIndex) - bandwidth / 2 + bandwidth / 2)
                      .attr('x2', x(showVitalVerticalLineIndex) - bandwidth / 2 + bandwidth / 2)
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
