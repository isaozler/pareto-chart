# Grafana Pareto Panel Plugin

[Screenshot of plugin](./src/img/pareto-chart-screenshot.png)

## Getting started

This plugin provides you the ability to draw a Pareto chart with `RDB` and `TimeSeries databases`. **TimeSeries** collections don't need any configurations except the mappings. The first col will always be datetime and the second column will be the numeric value.

With **relational databases** we do need to select the right columns. For this, it's enough to just have the columns you want to visualize as the first two selects like shown below.

### MySQL Sample

Provide the `defects` which could be "categories" (type **string**) for example and a `frequency` value cummulatives/counts (type **number**).

|  Defects | Counts |
| :-:	| :-:	|
| Error 1 | 10 |
| Error 2 | 4 |
| Error 3 | 1 |

## Sample Query

```sql
SELECT _label_, _count_, ...
FROM _table_
```
---

## IDE / Development

1. Install dependencies
```BASH
yarn install
```
2. Development mode in watch mode
```BASH
yarn dev
```
or
```BASH
yarn watch
```
3. Build plugin to production
```BASH
yarn build
```
4. Deploy ready for production

```BASH
# This will create a pareto-chart.zip file which you can add manually to your Grafana environment.
yarn deploy
```