import { css } from 'emotion';
import { stylesFactory, useTheme } from '@grafana/ui';

export const getStyles = stylesFactory(() => {
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
      transition: all 0.2s ease;

      &:not(.tooltip--visible) {
        z-index: -10;
        opacity: 0;
      }

      .tooltip--visible {
        z-index: 1;
        opacity: 1;
      }
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

      label {
        display: block;
        background: inherit;
        padding: 0 0 4px 0;

        &.label-header {
          font-weight: bold;
          font-size: 1.2rem;
          max-width: 100%;
        }
      }

      .tooltip-copy-label {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        background: ${theme.colors.border2};
        color: ${theme.colors.text};
        font-size: 10px;
        height: 20px;
        box-sizing: border-box;
        padding: 2px 4px;

        &.hidden {
          opacity: 0;
          z-index: -1;
        }
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

      &:hover {
        fill: ${theme.colors.text};
      }
    `,
    barValue: css`
      fill: ${theme.colors.text};
      text-anchor: middle;
      opacity: 1;
      transition: opacity 0.2s ease-out;
      user-select: none;
    `,
    line: css`
      fill: none;
      stroke: ${theme.colors.text};
      stroke-width: 2px;
      shape-rendering: geometricPrecision;
    `,
    lineCutOff: css`
      fill: none;
      stroke: rgba(255, 0, 0, 0.75);
      stroke-width: 2px;
      stroke-dasharray: 5px;
    `,
    lineBottomAxis: css`
      // fill: none;
      stroke: ${theme.colors.text};
      shape-rendering: crispEdges;
    `,
    paths: css`
      position: relative;
    `,
    brushWrapper: css`
      fill: ${theme.colors.bg3};
      stroke: ${theme.colors.border2};
      stroke-width: 0.75px;

      .selection {
        fill: ${theme.colors.bgBlue2} !important;
        fill-opacity: 0.75;
        stroke: none;

        &--invalid {
          fill: ${theme.palette.brandDanger} !important;
        }
      }

      .handle {
        fill: ${theme.palette.brandWarning} !important;
        fill-opacity: 0.75;
      }
    `,
    brushOverlay: css`
      cursor: crosshair;
    `,
    textLabel: {
      __largeBar: css``,
      __smallBar: css``,
      __hidden: css`
        fill: none;
        opacity: 0;
      `,
    },
    axis: css`
      text {
        user-select: none;
      }
    `,
    chartMaskId: css`
      fill: none;
      user-select: none;
    `,
    placeholder: {
      __noData: css`
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        font-weight: bold;
        color: ${theme.palette.redBase};
        height: 100%;
        user-select: none;
      `,
    },
    forcedHidden: {
      __barLabel: css`
        opacity: 0 !important;
        transform: translate(0, -100px);
      `,
    },
  };
});
