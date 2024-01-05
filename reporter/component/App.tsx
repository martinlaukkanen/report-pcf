import React, { useEffect, useState } from 'react';
import { Spinner } from '@fluentui/react';
import { AgChartTheme } from 'ag-charts-community';
import { IInputs } from '../generated/ManifestTypes';
import { ChartType, IAggregate, IAxes, IControlDescription, IData } from '../types';
import { Dataservice } from '../services';
import { Cartesian, Pie } from './Charts';
import styles from './App.module.scss';

export interface IAppProps {
	context: ComponentFramework.Context<IInputs>;
	controlProps?: IControlDescription;
	theme: AgChartTheme;
}

export const App: React.FC<IAppProps> = (props: IAppProps) => {
	const { context, controlProps, theme } = props;
	const { chartType, chartSubtitle, tableData } = context.parameters;
	const title = controlProps?.ShowLabel ? controlProps.Label : null;

	const [data, setData] = useState<IData[]>();
	const [settings, setSettings] = useState<IAxes>(Dataservice.getChartAxes(context.parameters));
	const [aggregate, setAggregate] = useState<IAggregate[]>();

	useEffect(() => {
		const loadData = async (): Promise<void> => {
			const transformData = await Dataservice.transformData(tableData);
			setData(transformData);

			// Still loading data?
			if (transformData.length < tableData.paging.totalResultCount) {
				return;
			}

			const axes = await Dataservice.getChartColors(settings, tableData);
			setSettings(axes);

			setAggregate(Dataservice.aggregateData(transformData, axes));
		};
		loadData().catch((error) => context.navigation.openErrorDialog({ message: error.message, details: error.stack }));
	}, [context.navigation, settings, tableData]);

	// No data or mock test env
	if (!data?.length || data[0].name === 'val') {
		return <span>No data!</span>;
	}

	// Default radius for Pie chart
	let innerRadius = 0;

	// Still loading?
	if (
		!data ||
		!settings ||
		!aggregate ||
		tableData.loading ||
		data.length < tableData.paging.totalResultCount
	) {
		return <Spinner className={styles.loadingSpinner} />;
	}

	switch (chartType.raw) {
		case ChartType.Donut:
			innerRadius = 0.6;
		case ChartType.Pie:
			return (
				<Pie
					data={aggregate}
					axes={settings}
					title={title}
					subtitle={chartSubtitle.raw}
					innerRadius={innerRadius}
					theme={theme}
				/>
			);

		case ChartType.Bar:
		case ChartType.Area:
		case ChartType.Line:
			return (
				<Cartesian
					type={chartType.raw}
					data={aggregate}
					axes={settings}
					title={title}
					subtitle={chartSubtitle.raw}
					theme={theme}
				/>
			);

		default:
			return <span>No chart type!</span>;
	}
};
