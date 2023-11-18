import React from 'react';
import { AgChartsReact } from 'ag-charts-react';
import { AgPolarSeriesOptions } from 'ag-charts-community';
import { IChartBaseProps } from '../../types/IChartBaseProps';

export interface IDonutProps extends IChartBaseProps {
	innerRadius?: number;
}

export const Donut = React.memo<IDonutProps>(function Donut(props: IDonutProps) {
	const { width, height, innerRadius, data, axes } = props;

	const series: AgPolarSeriesOptions[] = [
		{
			type: 'pie',
			calloutLabelKey: axes.categories[0],
			angleKey: axes.series[0].field,
			innerRadiusRatio: innerRadius ?? 0.6,
		},
	];

	return <AgChartsReact options={{ data, series, width, height }} />;
});
