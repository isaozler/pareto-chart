import { PanelProps } from '@grafana/data';
import { ParetoOptions } from 'helpers/types';

export interface PathsComponentInterface {
  theme: any;
  styles: any;
  padding: number;
  chartId: string;
  chartWidth: number;
  chartHeight: number;
  vitalBreakpointVal: number;
  vitalLineColor: string;
  curveLineColor: string;
  x: any;
  p: any;
  y: any;
  xBand: any;
  pathData: any;
  line: any;
  showVitalFew: boolean;
  cutOffXPathData: any;
}

export interface AxisComponentInterface {
  data: any;
  padding: number;
  styles: any;
  line: any;
  vitalBreakpointVal: number;
  isInclusive: boolean;
  bottomLineData: any;
  chartHeight: number;
  chartWidth: number;
  x: any;
  y: any;
  p: any;
  pLabels: any;
  xPBand: any;
}

export interface BarGraphSettings {
  options: any;
  width: number;
  height: number;
}

export interface Props extends PanelProps<ParetoOptions> {}

export interface GraphData {
  x: string[];
  y: number[];
  p: number[];
  [key: string]: any;
}

export interface Error {
  message: string;
}

export enum FieldTypes {
  time,
  number,
}

export type SerieField = {
  name: string;
  type: keyof FieldTypes;
};

export type DataFrame = {
  fields: SerieField[];
  name: string;
  refId: string;
  meta: {
    executedQueryString: string;
  };
};
