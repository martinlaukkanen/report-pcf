import React from 'react';
import { AgPolarSeriesOptions } from 'ag-charts-community';
import { IChartBaseProps } from '../../types/IChartBaseProps';
import { Chart } from './Chart';

export interface IPieProps extends IChartBaseProps {
	innerRadius?: number;
}

export const Pie = React.memo<IPieProps>(function Pie(props: IPieProps) {
	const { data, axes, title, subtitle, innerRadius } = props;

	const series: AgPolarSeriesOptions[] = [
		{
			type: 'pie',
			calloutLabelKey: axes.categories[0].label,
			angleKey: axes.series[0].field,
			innerRadiusRatio: innerRadius,
		},
	];

	return <Chart series={series} data={data} title={title} subtitle={subtitle} axes={axes} />;
});
