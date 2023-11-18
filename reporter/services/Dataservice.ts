import { IInputs } from '../generated/ManifestTypes';
import { IAxes } from '../types';
import { IData } from '../types/IData';

export class Dataservice {
	// eslint-disable-next-line no-useless-constructor
	constructor(
		private tableData: ComponentFramework.PropertyTypes.DataSet,
		private parameters: IInputs
	) {}

	public transformData = (): IData[] => {
		const data: IData[] = [];
		const { records, columns } = this.tableData;

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

		console.log(data);
		return data;
	};

	public getChartAxes = (): IAxes => {
		const { category1, series1, series1agg, category2, series2, series2agg } = this.parameters;
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
}
