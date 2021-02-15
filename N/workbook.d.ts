/** Load the N/workbook module when you want to create a new workbook, load an existing workbook, or list all existing workbooks. */
// TODO: Implement this module.  May want to wait until 2021.1, as it still looks like an early beta feature in 2020.2.

import { Dataset } from "./dataset";

interface Aspect {
  measure: Measure;
  type: AspectType;
}

interface Category {
  axis: ChartAxis;
  /** The root data (i.e., fields) that defines the category. */
  root: DataDimension|Section;
  sortDefinitions: SortDefinition[];
}

/** A chart axis. A chart axis is used when you create a category or a legend. You can create a chart axis using workbook.createChartAxis(options). */
interface ChartAxis {
  title: string;
}

/**
 * A chart definition.
 * A chart is a workbook component that enables you to visualize your dataset query results using predefined chart and graph types, such as line graphs and bar charts.
 * A chart definition is used when you create a workbook.
 * You can create a chart definition using workbook.createChartDefinition(options).
 */
interface ChartDefinition {
  /** The limiting and conditional filters of the chart definition. */
  aggregationFilters: (LimitingFilter|ConditionalFilter)[];
  /** The category of the chart definition. */
  category: string;
  /** The underlying dataset for the chart definition. */
  dataset: Dataset;
  /** The filter expressions for the chart definition. */
  filterExpression: Expression[];
  /** The ID of chart definition. */
  id: string;
  /** The legend of the chart definition. */
  legend: Legend;
  /** The name of the chart definition. */
  name: string;
  /** The series of the chart definition. */
  series: Series;
  /** The stacking type for the chart definition. */
  stacking: Stacking;
  /** The subtitle of the chart definition. */
  subtitle: string;
  /** The title of chart definition. */
  title: string;
  /** The chart type of the chart definition. */
  chartType: ChartType
}
/**
 * A conditional filter.
 * A conditional filter can be used when you create a pivot definition or a chart definition.
 * You can create a conditional filter using workbook.createConditionalFilter(options).
 */
interface ConditionalFilter {

}

interface DataDimension {

}

export interface Expression {

}

interface LimitingFilter {
  
}

interface Measure {

}

interface Section {

}

interface SortDefinition {

}

interface Legend {

}

interface Series {

}

declare enum Stacking {
  DISABLED,
  NORMAL,
  PERCENT
}

declare enum AspectType {
  COLOR = 'color',
  VALUE = 'value'
}

declare enum ChartType {
  AREA,
  BAR,
  COLUMN,
  LINE
}
