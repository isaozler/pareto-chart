import { PanelPlugin } from '@grafana/data';
import { ParetoOptions } from './types';
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
        description: 'Space between bars. Should be a value between 0 and 1.',
        defaultValue: 0.2,
        settings: {
          min: 0,
          max: 1,
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
  );
});
