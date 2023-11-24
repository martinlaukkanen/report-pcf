/* eslint-disable no-fallthrough */
import React from 'react';
import { IInputs } from '../generated/ManifestTypes';
import { ChartType, IControlDescription } from '../types';
import { Dataservice } from '../services/Dataservice';
import { Cartesian, Pie } from './Charts';

export interface IAppProps {
	context: ComponentFramework.Context<IInputs>;
	controlProps?: IControlDescription;
}

export const App: React.FC<IAppProps> = (props: IAppProps) => {
	const { context, controlProps } = props;
	const { chartType, chartSubtitle } = context.parameters;
	const title = controlProps?.ShowLabel ? controlProps.Label : null;

	const service = new Dataservice();
	const data = service.transformData(props.context.parameters.tableData);
	const settings = service.getChartAxes(props.context.parameters);
	const aggregate = service.aggregateData(data, settings);

	// No data or mock test env
	if (!data.length || data[0].name === 'val') {
		return <span>No data!</span>;
	}

	// Default radius for Pie chart
	let innerRadius = 0;

	switch (chartType.raw) {
		case ChartType.Donut:
			innerRadius = 0.6;
		case ChartType.Pie:
			return (
				<Pie
					data={aggregate}
					axes={settings}
					title={title}
					subtitle={chartSubtitle.raw}
					innerRadius={innerRadius}
				/>
			);

		case ChartType.Bar:
		case ChartType.Area:
		case ChartType.Line:
			return (
				<Cartesian
					type={chartType.raw}
					data={aggregate}
					axes={settings}
					title={title}
					subtitle={chartSubtitle.raw}
				/>
			);

		default:
			return <span>No chart type!</span>;
	}
};
