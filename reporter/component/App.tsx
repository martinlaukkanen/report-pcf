import React from 'react';
import { IInputs } from '../generated/ManifestTypes';
import { ChartType } from '../types';
import { Donut, Bar } from './Charts';
import { Dataservice } from '../services/Dataservice';

export interface IAppProps {
	context: ComponentFramework.Context<IInputs>;
	allocatedHeight: number;
	allocatedWidth: number;
}

export const App: React.FC<IAppProps> = (props: IAppProps) => {
	const { allocatedHeight, allocatedWidth } = props;
	const { chartType, chartTitle, chartSubtitle } = props.context.parameters;
	const width = Number(allocatedWidth);
	const height = Number(allocatedHeight);

	const service = new Dataservice();
	const data = service.transformData(props.context.parameters.tableData);
	const settings = service.getChartAxes(props.context.parameters);
	const aggregate = service.aggregateData(data, settings);

	if (!data.length || data[0].name === 'val') {
		return <span>No data!</span>;
	}

	switch (chartType.raw) {
		case ChartType.Donut:
			return (
				<Donut
					width={width}
					height={height}
					data={aggregate}
					axes={settings}
					title={chartTitle.raw}
					subtitle={chartSubtitle.raw}
				/>
			);

		case ChartType.Pie:
			return <span>No pie!</span>;

		case ChartType.Bar:
			return (
				<Bar
					width={width}
					height={height}
					data={aggregate}
					axes={settings}
					title={chartTitle.raw}
					subtitle={chartSubtitle.raw}
				/>
			);

		default:
			return <span>No chart type!</span>;
	}
};
