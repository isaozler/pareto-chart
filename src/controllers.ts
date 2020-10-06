export interface GraphData {
  x: string[];
  y: number[];
  p: number[];
  [key: string]: any;
}

export class PanelDataController {
  dataType: string;
  results: GraphData;

  constructor(data: any) {
    const [target] = data.request.targets;
    const { resultFormat } = target;
    const [serie] = data.series;
    const { fields, meta } = serie;

    if (!!meta && !!meta.executedQueryString && resultFormat !== 'time_series') {
      this.dataType = 'table';
      this.results = this.setTableData(fields);
    } else if (resultFormat === 'time_series') {
      this.dataType = 'series';
      this.results = this.setTimeSeriesData(data.series);
    } else {
      this.dataType = 'series';
      this.results = this.setSeriesData(fields);
    }
  }

  getResults() {
    return this.results;
  }

  private setTableData(fields: any) {
    const xData = fields.find(({ name }: { name: string }) => name === 'x');
    const yData = fields.find(({ name }: { name: string }) => name === 'y');
    const xValues: string[] = xData.values.toArray().map((d: any, i: number) => `${d}`);
    const yValues: number[] = yData.values.toArray();
    return this.setResults(xValues, yValues, this.sumYVals(yValues));
  }

  private setSeriesData(fields: any) {
    const [xData, yData] = fields;
    const xValues: string[] = xData.values.toArray().map((d: any, i: number) => i);
    const yValues: number[] = yData.values.toArray();
    return this.setResults(xValues, yValues, this.sumYVals(yValues));
  }

  private setTimeSeriesData(series: any) {
    const xValues: string[] = series.map(({ name }: { name: string }, i: number) => this.stripName(name));
    const yValues: number[] = series.map(({ fields }: { fields: any }, i: number) => {
      const [, val]: [any, any] = fields;
      const [response]: [number] = val.values.toArray();
      return response;
    });
    return this.setResults(xValues, yValues, this.sumYVals(yValues));
  }

  private sumYVals(vals: number[]) {
    return vals.reduce((a, d) => a + d, 0);
  }

  private stripName(name: string) {
    const [fullTagName, tagName] = name.match(/\{.*:+(.*)\}/);
    if (!!tagName) {
      return tagName.trim();
    } else if (!!fullTagName) {
      return fullTagName.trim();
    }
    return name;
  }

  private setResults(xValues: string[], yValues: number[], yValuesSum: number) {
    this.results = yValues
      .map((d, i) => ({ i, x: xValues[i], y: d }))
      .sort((a, b) => b.y - a.y)
      .reduce(
        (result: GraphData, d, i) => {
          const xPercentage = (d.y * 100) / yValuesSum;
          const percentage = (result?.p[i - 1] ? result.p[i - 1] : 0) + xPercentage;
          const xLabel = i === yValues.length - 1 ? `${percentage.toFixed(0)} %` : `${percentage.toFixed(2)} %`;
          const tooltipLabel = `${xPercentage.toFixed(2)} %`;

          return {
            ...result,
            x: [...result.x, xLabel],
            y: [...result.y, d.y],
            p: [...result.p, percentage],
            yLabel: [...result.yLabel, d.y.toFixed(2)],
            tooltipLabel: [...result.tooltipLabel, tooltipLabel],
          };
        },
        { x: [], y: [], p: [], yLabel: [], tooltipLabel: [] }
      );
    return this.results;
  }
}
