import { IInputs } from '../generated/ManifestTypes';
import { IAxes } from '../types';
import { IAggregate, IData } from '../types/IData';

type GroupedObjects<T> = { [key: string]: T[] };

export class Dataservice {
	public transformData = (tableData: ComponentFramework.PropertyTypes.DataSet): IData[] => {
		const data: IData[] = [];
		const { records, columns } = tableData;

		Object.keys(records).forEach((id) => {
			const record = records[id];
			const row: IData = {
				id,
				record,
				formattedValues: {},
			};

			// Get raw values mapped to column internal name
			columns.forEach((column) => {
				const { name } = column;
				row[name] = record.getValue(name);
			});

			// Get formatted values mapped to column internal name
			columns.forEach((column) => {
				const { name } = column;
				row.formattedValues[name] = record.getFormattedValue(name);
			});

			data.push(row);
		});

		return data;
	};

	public getChartAxes = (parameters: IInputs): IAxes => {
		const { category1, series1, series1agg, category2, series2, series2agg } = parameters;
		const settings: IAxes = {
			categories: [],
			series: [],
		};

		if (!category1?.raw || !series1.raw) {
			throw new Error('Category 1 or Series 1 not configured');
		}

		settings.categories.push(category1.raw);
		settings.series.push({
			field: series1.raw,
			aggregate: series1agg.raw,
		});

		// TODO: other categories and series

		return settings;
	};

	public aggregateData = (data: IData[], settings: IAxes): IAggregate[] => {
		const { categories } = settings;
		const categoryField = categories[0];
		const { aggregate, field } = settings.series[0];

		const grouped = this.groupBy<IData>(data, categoryField);

		// Now apply the aggregate function
		const aggregated: IAggregate[] = Object.keys(grouped).map((category, id) => {
			const val: IAggregate = { id, [categoryField]: category };
			switch (aggregate) {
				case 'avg':
					val[field] = this.avgByKey(grouped[category], field);
					break;
				case 'sum':
					val[field] = this.sumByKey(grouped[category], field);
					break;
				case 'max':
					val[field] = this.maxByKey(grouped[category], field);
					break;
				case 'min':
					val[field] = this.minByKey(grouped[category], field);
					break;
				case 'count':
					val[field] = grouped[category]?.length;
					break;
			}
			return val;
		});

		console.log(aggregated);

		return aggregated;
	};

	private groupBy<T>(array: T[], key: keyof T): GroupedObjects<T> {
		return array.reduce((result: GroupedObjects<T>, currentItem: T) => {
			const keyValue = currentItem[key] as string;

			if (!result[keyValue]) {
				result[keyValue] = [];
			}

			result[keyValue].push(currentItem);

			return result;
		}, {});
	}

	private avgByKey = <T>(array: T[], key: keyof T): number => {
		const sum = array.reduce((accumulator, currentItem) => {
			const propertyValue = currentItem[key] as number;
			return accumulator + propertyValue;
		}, 0);

		return sum / array.length;
	};

	private sumByKey = <T>(array: T[], key: keyof T): number => {
		const sum = array.reduce((accumulator, currentItem) => {
			const propertyValue = currentItem[key] as number;
			return accumulator + propertyValue;
		}, 0);

		return sum;
	};

	private maxByKey = <T>(array: T[], key: keyof T): number | undefined => {
		if (array.length === 0) {
			return undefined;
		}

		return array.reduce((maxValue, currentItem) => {
			const propertyValue = currentItem[key] as number;
			return Math.max(maxValue, propertyValue);
		}, Number.NEGATIVE_INFINITY);
	};

	private minByKey = <T>(array: T[], key: keyof T): number | undefined => {
		if (array.length === 0) {
			return undefined;
		}

		return array.reduce((minValue, currentItem) => {
			const propertyValue = currentItem[key] as number;
			return Math.min(minValue, propertyValue);
		}, Number.POSITIVE_INFINITY);
	};
}
