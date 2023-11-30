import React from 'react';
import { AgPolarSeriesOptions } from 'ag-charts-community';
import tinycolor from 'tinycolor2';
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

	if (axes.categories[0].colors) {
		const { colors } = axes.categories[0];
		series[0].fills = colors;
		series[0].strokes = colors.map((color) => tinycolor(color).darken().toString());
	}

	return <Chart series={series} data={data} title={title} subtitle={subtitle} axes={axes} />;
});
