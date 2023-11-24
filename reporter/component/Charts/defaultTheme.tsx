import { AgChartTheme } from 'ag-charts-community';

export const defaultTheme: AgChartTheme = {
	baseTheme: 'ag-default',
	overrides: {
		polar: {
			series: {
				pie: {
					highlightStyle: {
						item: {
							fill: 'white',
							fillOpacity: 0.4,
						},
					},
				},
			},
		},
		cartesian: {
			series: {
				bar: {
					highlightStyle: {
						item: {
							fill: 'white',
							fillOpacity: 0.4,
						},
					},
				},
				column: {
					highlightStyle: {
						item: {
							fill: 'white',
							fillOpacity: 0.4,
						},
					},
				},
			},
		},
	},
};
