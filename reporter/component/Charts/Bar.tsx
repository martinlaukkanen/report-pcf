import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';
import { AgCartesianChartOptions } from 'ag-charts-community';
import { IChartBaseProps } from '../../types/IChartBaseProps';

export interface IBarProps extends IChartBaseProps {
	type?: string;
}

export const Bar = React.memo<IBarProps>(function Donut(props: IBarProps) {
	const { width, height } = props;

	const [options, setOptions] = useState<AgCartesianChartOptions>({
		title: {
			text: "Apple's revenue by product category",
		},
		subtitle: {
			text: 'in billion U.S. dollars',
		},
		series: [
			{
				type: 'column',
				xKey: 'quarter',
				yKey: 'iphone',
			},
		],
		data: [
			{
				quarter: "Q1'18",
				iphone: 140,
				mac: 16,
				ipad: 14,
				wearables: 12,
				services: 20,
			},
			{
				quarter: "Q2'18",
				iphone: 124,
				mac: 20,
				ipad: 14,
				wearables: 12,
				services: 30,
			},
			{
				quarter: "Q3'18",
				iphone: 112,
				mac: 20,
				ipad: 18,
				wearables: 14,
				services: 36,
			},
			{
				quarter: "Q4'18",
				iphone: 118,
				mac: 24,
				ipad: 14,
				wearables: 14,
				services: 36,
			},
			{
				quarter: "Q1'19",
				iphone: 124,
				mac: 18,
				ipad: 16,
				wearables: 18,
				services: 26,
			},
			{
				quarter: "Q2'19",
				iphone: 108,
				mac: 20,
				ipad: 16,
				wearables: 18,
				services: 40,
			},
			{
				quarter: "Q3'19",
				iphone: 96,
				mac: 22,
				ipad: 18,
				wearables: 24,
				services: 42,
			},
			{
				quarter: "Q4'19",
				iphone: 104,
				mac: 22,
				ipad: 14,
				wearables: 20,
				services: 40,
			},
		],
	});

	return <AgChartsReact options={{ ...options, width, height }} />;
});
