import React from 'react';
import { IInputs } from '../generated/ManifestTypes';
import { ChartType } from '../types';
import { Donut, Bar } from './Charts';

export interface IAppProps {
	context: ComponentFramework.Context<IInputs>;
	allocatedHeight: number;
	allocatedWidth: number;
}

export const App: React.FC<IAppProps> = (props: IAppProps) => {
	const { allocatedHeight, allocatedWidth } = props;
	const { chartType } = props.context.parameters;
	const width = Number(allocatedWidth);
	const height = Number(allocatedHeight);

	switch (chartType.raw) {
		case ChartType.Donut:
			return <Donut width={width} height={height} />;

		case ChartType.Pie:
			return <span>No pie!</span>;

		case ChartType.Bar:
			return <Bar width={width} height={height} />;

		default:
			return <span>No chart type!</span>;
	}
};
