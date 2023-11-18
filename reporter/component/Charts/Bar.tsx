import React from 'react';
import { AgChartsReact } from 'ag-charts-react';
import { AgCartesianSeriesOptions, AgChartCaptionOptions } from 'ag-charts-community';
import { IChartBaseProps } from '../../types/IChartBaseProps';

export interface IBarProps extends IChartBaseProps {
	type?: string;
}

export const Bar = React.memo<IBarProps>(function Donut(props: IBarProps) {
	const { data, width, height, type, axes, title, subtitle } = props;
	const category1 = axes.categories[0];
	const series1 = axes.series[0].field;

	const series: AgCartesianSeriesOptions<never>[] = [
		{
			type: 'column',
			xKey: category1,
			yKey: series1,
		},
	];

	const titleConfig: AgChartCaptionOptions | undefined = title
		? {
				text: title,
		  }
		: undefined;

	const subtitleConfig: AgChartCaptionOptions | undefined = subtitle
		? {
				text: subtitle,
		  }
		: undefined;

	return <AgChartsReact options={{ title: titleConfig, subtitle: subtitleConfig, series, width, height, data }} />;
});
