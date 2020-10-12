import React, { useRef, useEffect } from 'react';
import { getStyles } from './styles';
import { select as d3Select } from 'd3';
import { eventBus } from './eventBus';
import { CONSTANTS } from './constants';

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
    eventBus.on(CONSTANTS.E_TOOLTIP_CLICK, barClickEventHandler);
    eventBus.on(CONSTANTS.E_TOOLTIP_MOVE, barMoveEventHandler);

    return () => {
      eventBus.remove(CONSTANTS.E_TOOLTIP_CLICK, barClickEventHandler);
      eventBus.remove(CONSTANTS.E_TOOLTIP_MOVE, barMoveEventHandler);
    };
  }, []);

  return (
    <div ref={tooltipRef} className={['tooltip__container', styles.tooltipContainer].join(' ')}>
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
  const { labelHeader, label: labelValue, isVital, count } = event.currentTarget?.dataset || {};
  const isVisible = ['mouseover', 'mousemove'].includes(event.type) ? true : false;

  if (event.type === 'mouseout') {
    contents.copyText = contents.initCopyText;
  }

  if (!!tooltipDiv) {
    d3Select(tooltipDiv).classed('tooltip--visible', isVisible);

    if (isVisible) {
      d3Select(tooltipDiv)
        .style('left', `${event.pageX}px`)
        .style('top', `${event.pageY - 28}px`);
    }

    d3Select(tooltipContentDiv).style(
      'background',
      isVital === 'true' ? props.theme.palette.greenBase : props.theme.palette.redBase
    ).html(`<label class="label-header">${labelHeader}
      ${
        !!contents.copyText ? getCopyLabel(props, contents.copyText) : getCopyLabel(props, contents.initCopyText)
      }</label>
      <label class="label-value">Percentage of sum: ${labelValue}</label>
      <strong>${count}</strong>
    `);
  }
};

export const barClickHandler = (tooltipRef: any, props: any, event: React.MouseEvent<SVGRectElement, MouseEvent>) => {
  const content = event.currentTarget?.dataset.labelHeader || 'No Content';
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
