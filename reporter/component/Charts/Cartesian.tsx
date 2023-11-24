import React from 'react';
import { AgCartesianSeriesOptions } from 'ag-charts-community';
import { IChartBaseProps } from '../../types/IChartBaseProps';
import { Chart } from './Chart';

export interface ICartesianProps extends IChartBaseProps {
	type: 'line' | 'scatter' | 'area' | 'bar' | 'column' | 'histogram';
}

export const Cartesian = React.memo<ICartesianProps>(function Cartesian(props: ICartesianProps) {
	const { data, axes, type, title, subtitle } = props;
	const category1 = axes.categories[0];
	const series1 = axes.series[0].field;

	const series: AgCartesianSeriesOptions<never>[] = [
		{
			type,
			xKey: category1.label,
			yKey: series1,
		},
	];

	return <Chart series={series} data={data} title={title} subtitle={subtitle} axes={axes} />;
});
