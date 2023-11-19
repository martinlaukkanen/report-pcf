import React from 'react';
import { AgChartsReact } from 'ag-charts-react';
import { AgCartesianSeriesOptions, AgChartCaptionOptions, AgPolarSeriesOptions } from 'ag-charts-community';
import { IChartBaseProps } from '../../types/IChartBaseProps';

export interface IChartProps extends IChartBaseProps {
	series?: AgCartesianSeriesOptions<never>[] | AgPolarSeriesOptions[];
}

export const Chart: React.FC<IChartProps> = (props: IChartProps) => {
	const { data, width, height, title, subtitle, series } = props;

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
		// Series types are not all compatible so any
		<AgChartsReact
			options={{ title: titleConfig, subtitle: subtitleConfig, series: series as any, width, height, data }}
		/>
	);
};
