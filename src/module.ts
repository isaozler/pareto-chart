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
        path: 'showBarValue',
        name: 'Show bar values',
        description: 'Show the bar values on top of the bars?',
        defaultValue: false,
      })
      .addNumberInput({
        path: 'valToFixed',
        name: 'Number of decimals',
        description: 'Set number of decimals in bar values.',
        settings: {
          min: 0,
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
      .addBooleanSwitch({
        path: 'isCopyLabelVisible',
        name: 'Show copy content label?',
        description: 'This label below the tooltip hints users to copy content of the entered bar.',
        defaultValue: true,
      })
  );
});
