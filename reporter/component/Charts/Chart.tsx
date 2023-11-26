import React from 'react';
import { AgChartsReact } from 'ag-charts-react';
import { AgCartesianSeriesOptions, AgChartCaptionOptions, AgPolarSeriesOptions } from 'ag-charts-community';
import { IChartBaseProps } from '../../types/IChartBaseProps';
import { fluentTheme } from './fluentTheme';
import { defaultTheme } from './defaultTheme';

export interface IChartProps extends IChartBaseProps {
	series?: AgCartesianSeriesOptions<never>[] | AgPolarSeriesOptions[];
}

export const Chart: React.FC<IChartProps> = (props: IChartProps) => {
	const { data, title, subtitle, series } = props;

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

	return (
		<div style={{ width: '100%', height: '100%' }}>
			<AgChartsReact
				options={{
					// Show title and sub title if both provided, otherwise show only one as title
					title: titleConfig ?? subtitleConfig,
					subtitle: titleConfig ? subtitleConfig : undefined,
					// Series types are not all compatible so any
					series: series as any,
					autoSize: true,
					data,
					theme: defaultTheme,
				}}
			/>
		</div>
	);
};
