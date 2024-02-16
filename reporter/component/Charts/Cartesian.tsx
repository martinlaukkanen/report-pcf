import React from 'react';
import { AgCartesianSeriesOptions } from 'ag-charts-community';
import { Chart } from './Chart';
import { ICartesianProps } from '../../types';

export const Cartesian = React.memo<ICartesianProps>(function Cartesian(props: ICartesianProps) {
	const { axes, type } = props;
	const category1 = axes.categories[0];
	const series1 = axes.series[0].field;

	const series: AgCartesianSeriesOptions[] = [
		{
			type: type as any,
			xKey: category1.label,
			yKey: series1,
		},
	];

	return <Chart {...props} series={series} axes={axes} />;
});
