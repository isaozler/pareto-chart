import React, { useRef, useEffect } from 'react';
import { select as d3Select } from 'd3';
import { eventBus } from '../helpers/eventBus';
import { CONSTANTS } from '../helpers/constants';
import { camelCase } from '../helpers/utils';
import { getStyles } from '../styles';

const contents = {
  initCopyText: 'Click on bar to copy data',
  copyText: '',
  dataCopied: 'Copied data!',
};

const getCopyLabel = ({ isCopyLabelVisible }: any, text: string) =>
  `<span class="tooltip-copy-label ${!isCopyLabelVisible ? 'hidden' : ''}">${text}</span>`;

export const TooltipComponent = (props: any) => {
  const styles = getStyles();
  const tooltipRef = useRef(null);
  const tooltipContentRef = useRef(null);
  const barClickEventHandler = (e: any) => {
    barClickHandler(tooltipRef, props, e);
  };
  const barMoveEventHandler = (e: any) => {
    tooltipHandler(tooltipRef, tooltipContentRef, props, e);
  };

  useEffect(() => {
    eventBus.on(`${props.chartId}-${CONSTANTS.E_TOOLTIP_CLICK}`, barClickEventHandler);
    eventBus.on(`${props.chartId}-${CONSTANTS.E_TOOLTIP_MOVE}`, barMoveEventHandler);

    return () => {
      eventBus.remove(`${props.chartId}-${CONSTANTS.E_TOOLTIP_CLICK}`, barClickEventHandler);
      eventBus.remove(`${props.chartId}-${CONSTANTS.E_TOOLTIP_MOVE}`, barMoveEventHandler);
    };
  }, []);

  return (
    <div ref={tooltipRef} className={['tooltip__container', styles.tooltipContainer, props.chartId].join(' ')}>
      <div ref={tooltipContentRef} className={styles.tooltip} />
    </div>
  );
};

export const tooltipHandler = (
  tooltipRef: any,
  tooltipContentRef: any,
  props: any,
  event: React.MouseEvent<SVGRectElement, MouseEvent>
) => {
  const { current: tooltipDiv } = tooltipRef || { current: null };
  const { current: tooltipContentDiv } = tooltipContentRef || { current: null };
  const { labelHeader, label: labelValue, label2, isVital, count, fillColor } = event.currentTarget?.dataset || {};
  const isVisible = ['mouseover', 'mousemove'].includes(event.type) ? true : false;
  const axisRightWidth = (d3Select('.axis-right').node() as HTMLDivElement)?.getBoundingClientRect()?.width + 20 || 60;

  if (event.type === 'mouseout') {
    contents.copyText = contents.initCopyText;
  }

  if (!!tooltipDiv) {
    d3Select(tooltipDiv).classed('tooltip--visible', isVisible);

    if (isVisible) {
      d3Select(tooltipDiv).style('right', `${axisRightWidth}px`);
    }

    let backgroundColor = !!fillColor
      ? fillColor
      : isVital === 'true'
      ? !!props.vitalColor
        ? camelCase(props.vitalColor)
        : props.theme.palette.brandDanger
      : !!props.trivialColor
      ? camelCase(props.trivialColor)
      : props.theme.palette.brandWarning;

    if (props.tooltipBackgroundColor) {
      backgroundColor = props.tooltipBackgroundColor;
    }

    d3Select(tooltipContentDiv).style('background', backgroundColor)
      .html(`<div class="labels-wrapper"><label class="label-header">${labelHeader}
      ${
        !!contents.copyText ? getCopyLabel(props, contents.copyText) : getCopyLabel(props, contents.initCopyText)
      }</label>
      <label class="label-value">Bar percentage: ${labelValue}</label>
      <label class="label-value">Cumulative percentage: ${label2}</label></div>
      <strong>${count}</strong>
    `);
  }
};

export const barClickHandler = (tooltipRef: any, props: any, event: React.MouseEvent<SVGRectElement, MouseEvent>) => {
  const content =
    `${event.currentTarget?.dataset.labelHeader}
    \r\nBar percentage: ${event.currentTarget?.dataset.label}
    \r\nCumulative percentage: ${event.currentTarget?.dataset.label2}
    \r\nCounts: ${event.currentTarget?.dataset.count}` || 'No Content';
  const textField = document.createElement('textarea');
  textField.innerText = content;
  const appendTo = !!tooltipRef.current ? tooltipRef.current : document.body;

  if (!!appendTo) {
    appendTo.appendChild(textField);
  }

  textField.select();
  document.execCommand('copy');
  d3Select(appendTo)
    .select('.tooltip-copy-label')
    .text(contents.dataCopied);
  textField.remove();
};
