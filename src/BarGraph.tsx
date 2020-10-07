import React, { MutableRefObject as ReactMutableRefObject } from 'react';
import {
  select as d3Select,
  max as d3Max,
  min as d3Min,
  scaleLinear as d3ScaleLinear,
  scaleBand as d3ScaleBand,
  line as d3Line,
} from 'd3';
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
  const { vitalBreakpointVal, isCopyLabelVisible } = options;
  const contents = {
    initCopyText: 'Click on bar to copy data',
    copyText: '',
    dataCopied: 'Copied data!',
  };
  const maxYOffsetVal: number = d3Max(data.y) || 0;
  const minYOffsetVal: number = d3Min(data.y) || 0;
  const padding = 20;
  const chartHeight = height - 2 * padding;
  const chartWidth = width - 2 * padding;
  const x = d3ScaleBand()
    .range([0, chartWidth - padding])
    .padding(options.barPadding);
  const y = d3ScaleLinear().range([chartHeight, 0]);
  const p = d3ScaleLinear().range([chartHeight, 0]);
  const line = d3Line()
    .x((d, i) => x(data.xAxisLabels[i]) || 0)
    .y((d: any, i) => chartHeight - (d.p * chartHeight) / 100 - padding);
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
        .style('left', `${event.pageX}px`)
        .style('top', `${event.pageY - 28}px`);
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

  x.domain(data.xAxisLabels);
  y.domain([yDomainMin, maxYOffsetVal + barHeightOffset]);

  return {
    padding,
    x,
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
  y,
  chartHeight,
  chartWidth,
  tooltipHandler,
  barClickHandler,
  vitalBreakpointVal,
  showVitalFew,
  showBarValue,
  valToFixed,
}) => {
  let issetVitalFewLine = false;
  const setIssetVitalFewLine = (state: boolean): boolean => {
    issetVitalFewLine = state;
    return true;
  };
  const hasVitals = !!data.p.filter((d: number, i: number) => d < vitalBreakpointVal).length;

  return (
    <g className="bars" transform={`translate(${padding}, 0)`}>
      {data.y.map((value: number, i: number) => {
        const currentX: number = x(data.xAxisLabels[i]) || 0;
        const step = Math.trunc(chartWidth / 10 / x.bandwidth());
        const label = typeof data.y[i] === 'number' && valToFixed >= 0 ? data.y[i].toFixed(valToFixed) : data.y[i];
        const BarLabel = () => (
          <text
            transform={`translate(0, -${padding / 2})`}
            className={styles.barValue}
            x={currentX + x.bandwidth() / 2}
            y={y(value)}
          >
            {label}
          </text>
        );
        const isVital = data.p[i] < vitalBreakpointVal || (!hasVitals && i === 0);

        return (
          <>
            <rect
              className={styles.bar}
              x={currentX}
              y={y(value)}
              width={x.bandwidth()}
              height={chartHeight - y(value)}
              fill={isVital ? theme.palette.greenBase : theme.palette.redBase}
              data-label-header={data.x[i]}
              data-label={data.tooltipLabel[i]}
              data-count={data.y[i]}
              data-is-vital={isVital}
              onMouseUp={barClickHandler}
              onMouseOver={tooltipHandler}
              onMouseMove={tooltipHandler}
              onMouseOut={tooltipHandler}
            />
            {showBarValue && x.bandwidth() >= 30 ? (
              <BarLabel />
            ) : showBarValue && x.bandwidth() < 30 && i % step === 0 ? (
              <BarLabel />
            ) : (
              <></>
            )}
            <>
              {data.p[i] > vitalBreakpointVal && showVitalFew && !issetVitalFewLine && setIssetVitalFewLine(true) && (
                <line
                  className={styles.lineCutOff}
                  transform={`translate(${0}, 0)`}
                  ref={node => {
                    d3Select(node)
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
