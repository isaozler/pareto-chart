import { PanelPlugin } from '@grafana/data';
import { ParetoOptions } from './helpers/types';
import { ParetoPanel } from './ParetoPanel';

export const plugin = new PanelPlugin<ParetoOptions>(ParetoPanel).setPanelOptions(builder => {
  return (
    builder
      .addBooleanSwitch({
        path: 'showVitalFew',
        name: 'Show vital few line',
        description: 'Indicates that many defects come from relatively few causes.',
        defaultValue: true,
      })
      .addNumberInput({
        path: 'vitalBreakpointVal',
        name: 'Vital few value (%)',
        description: 'Default is 80 based on the 80/20 rule. But, you are able to customize this.',
        defaultValue: 20,
      })
      .addBooleanSwitch({
        path: 'isInclusive',
        name: 'Inclusive vital few',
        description: 'Include bar with overlapping breakpoint value',
        defaultValue: false,
      })
      .addBooleanSwitch({
        path: 'showBarValue',
        name: 'Show bar values',
        description: 'Show the bar values on top of the bars?',
        defaultValue: false,
      })
      .addBooleanSwitch({
        path: 'showBarText',
        name: 'Show bar labels',
        description: 'Show the bar label?',
        defaultValue: false,
      })
      .addNumberInput({
        path: 'barTextFontSize',
        name: 'Bar label font size',
        description: 'Font size for the bar label.',
        defaultValue: 12,
      })
      .addNumberInput({
        path: 'barTextRotation',
        name: 'Bar label rotation',
        description: 'Rotation degree of the label',
        defaultValue: 270,
      })
      .addNumberInput({
        path: 'valToFixed',
        name: 'Number of decimals (max. 6)',
        description: 'Set number of decimals in bar values.',
        settings: {
          min: 0,
          max: 6,
        },
        defaultValue: 2,
        showIf: c => c.showBarValue,
      })
      /**
       * Will add the slider input once implementation is done :)
       */
      .addNumberInput({
        path: 'barPadding',
        name: 'Bar padding',
        description: 'Space between bars. Should be a value between 1 and 9.',
        defaultValue: 2,
        settings: {
          min: 1,
          max: 9,
        },
      })
      .addColorPicker({
        category: ['Colors'],
        path: 'curveLineColor',
        name: 'Percentage line',
        description: 'The curved line visualizing the optimal trade off',
        // defaultValue: theme.palette.brandDanger,
      })
      .addColorPicker({
        category: ['Colors'],
        path: 'vitalLineColor',
        name: 'Breakpoint lines',
        description: 'Horizontal and vertical lines indicating the vital few breakpoint',
        showIf: c => c.showVitalFew,
      })
      .addColorPicker({
        category: ['Colors'],
        path: 'vitalColor',
        name: 'Vital few bars',
        description: 'The bars within the determined vital few percentage',
        // defaultValue: theme.palette.brandDanger,
      })
      .addColorPicker({
        category: ['Colors'],
        path: 'barLabelColor',
        name: 'Bar label color',
        description: 'Color or the bar label',
        // defaultValue: theme.palette.brandDanger,
      })
      .addColorPicker({
        category: ['Colors'],
        path: 'trivialColor',
        name: 'Trivial many bars',
        description: 'The bars outside the vital few percentage',
        // defaultValue: theme.palette.brandSuccess,
      })
      .addColorPicker({
        category: ['Colors'],
        path: 'barHoverColor',
        name: 'Bar hover state',
        description: 'Bar fill color on hover',
        // defaultValue: theme.palette.brandSuccess,
      })
      .addColorPicker({
        category: ['Colors'],
        path: 'tooltipBackgroundColor',
        name: 'Custom tooltip background color',
        description: 'To specify a background color instead of hovered bar color. Refresh to apply color changes.',
      })
  );
});
