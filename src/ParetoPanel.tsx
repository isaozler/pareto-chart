import React, { useRef } from 'react';
import { PanelProps } from '@grafana/data';
import { ParetoOptions } from 'types';
import { css, cx } from 'emotion';
import { useTheme } from '@grafana/ui';
import { select as d3Select } from 'd3';
import { BarGraph } from './BarGraph';
import { BrushComponent } from './BrushComponent';
import { TooltipComponent } from './TooltipComponent';
import { PathsComponent, AxisComponent } from './GraphComponents';
import { PanelDataController } from './controllers';
import { getStyles } from './styles';

interface Props extends PanelProps<ParetoOptions> {}

export const ParetoPanel: React.FC<Props> = ({ options, data, width, height }) => {
  const svgRef = useRef(null);
  const theme = useTheme();
  const styles = getStyles();

  if (!data || !!!data.series.length) {
    return <div className={['placeholder--no-data', styles.placeholder.__noData].join(' ')}>No Data</div>;
  }

  const chartId = `chartMask_${styles.chartMaskId}_${+new Date()}`;
  const PanelData = new PanelDataController(data);
  const graphData = PanelData.getResults();
  const barGraphSettings = { options, width, height };
  const barGraphData = BarGraph(graphData, barGraphSettings);
  const props = {
    data: graphData,
    theme,
    styles,
    chartId,
    ...options,
    ...barGraphData,
    svgRef,
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
      <TooltipComponent {...props} />
      <svg
        ref={svgRef}
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
        <BrushComponent {...props} />
        <defs>
          <clipPath id={chartId}>
            <rect
              transform={`translate(0, -${props.padding})`}
              ref={node => {
                d3Select(node)
                  .attr('width', props.chartWidth - props.padding)
                  .attr('height', props.chartHeight + props.padding);
              }}
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
