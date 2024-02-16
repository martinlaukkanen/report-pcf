import React from 'react';
import { AgPieSeriesOptions } from 'ag-charts-community';
import tinycolor from 'tinycolor2';
import { IChartBaseProps } from '../../types';
import { Chart } from './Chart';

export interface IPieProps extends IChartBaseProps {
	innerRadius?: number;
}

export const Pie = React.memo<IPieProps>(function Pie(props: IPieProps) {
	const { axes, innerRadius } = props;

	// Adjust font size of callout based on dataset
	const calloutLabelSize = props.data.length > 8 ? 10 : 12;

	const series: AgPieSeriesOptions[] = [
		{
			type: 'pie',
			calloutLabelKey: axes.categories[0].label,
			angleKey: axes.series[0].field,
			innerRadiusRatio: innerRadius,
			calloutLabel: { fontSize: calloutLabelSize }			
		},
	];

	if (axes.categories[0].colors) {
		const { colors } = axes.categories[0];
		series[0].fills = colors;
		series[0].strokes = colors.map((color) => tinycolor(color).darken().toString());
	}

	return <Chart {...props} series={series} axes={axes} />;
});
