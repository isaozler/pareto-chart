# Grafana Pareto Panel Plugin

## Getting started

## DataSource

```sql
# MySQL 

## You need to return x (string[]) and y (number[]) columns.

SELECT label as x, val as y
FROM demo
```

**Timeseries** datasources should work out of the box (just tested it with the core "**random walk**" test data from the "**--Grafana--**" data-source )

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