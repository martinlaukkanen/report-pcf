import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';
import { AgPolarChartOptions } from 'ag-charts-community';
import { IChartBaseProps } from '../../types/IChartBaseProps';

export interface IDonutProps extends IChartBaseProps {
	innerRadius?: number;
}

export const Donut = React.memo<IDonutProps>(function Donut(props: IDonutProps) {
	const { width, height, innerRadius } = props;

	const [options, setOptions] = useState<AgPolarChartOptions>({
		data: [
			{ os: 'Android', share: 56.9 },
			{ os: 'iOS', share: 22.5 },
			{ os: 'BlackBerry', share: 6.8 },
			{ os: 'Symbian', share: 8.5 },
			{ os: 'Bada', share: 2.6 },
			{ os: 'Windows', share: 1.9 },
		],
		series: [
			{
				type: 'pie',
				calloutLabelKey: 'os',
				angleKey: 'share',
				innerRadiusRatio: innerRadius ?? 0.6,
			},
		],
	});

	return <AgChartsReact options={{ ...options, width, height }} />;
});
