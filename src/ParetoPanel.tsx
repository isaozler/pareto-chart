import React, { useRef } from 'react';
import { PanelProps } from '@grafana/data';
import { ParetoOptions } from 'types';
import { css, cx } from 'emotion';
import { useTheme } from '@grafana/ui';
import { BarGraph } from './BarGraph';
import { PathsComponent, AxisComponent } from './GraphComponents';
import { PanelDataController } from './controllers';
import { getStyles } from './styles';

interface Props extends PanelProps<ParetoOptions> {}

export const ParetoPanel: React.FC<Props> = ({ options, data, width, height }) => {
  if (!data || !!!data.series.length) {
    return <>No Data</>;
  }

  const theme = useTheme();
  const styles = getStyles();
  const tooltipRef = useRef(null);
  const tooltipContentRef = useRef(null);
  const PanelData = new PanelDataController(data);
  const graphData = PanelData.getResults();
  const barGraphSettings = { options, width, height };
  const barGraphRefs = { theme, tooltipRef, tooltipContentRef };
  const barGraphData = BarGraph(graphData, barGraphSettings, barGraphRefs);
  const props = {
    data: graphData,
    styles,
    ...options,
    ...barGraphRefs,
    ...barGraphData,
  };
  const Component = barGraphData.Component;

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
        <g transform={`translate(${barGraphData.padding}, ${barGraphData.padding})`} className="wrapper">
          <Component {...props} />
          <PathsComponent {...props} />
          <AxisComponent {...props} />
        </g>
      </svg>
    </div>
  );
};
