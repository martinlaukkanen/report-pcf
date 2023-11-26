import { AgChartTheme } from 'ag-charts-community';

const MSFonts =
	'"Segoe UI", "Segoe UI Web (West European)", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif';

export const defaultTheme: AgChartTheme = {
	baseTheme: 'ag-default',
	overrides: {
		common: {
			title: {
				fontFamily: MSFonts,
				fontSize: 16,
				fontWeight: '600',
			},
			subtitle: {
				fontFamily: MSFonts,
				fontSize: 14,
			},
			series: {
				pie: {
					highlightStyle: {
						item: {
							fill: 'white',
							fillOpacity: 0.4,
						},
					},
				},
				bar: {
					highlightStyle: {
						item: {
							fill: 'white',
							fillOpacity: 0.4,
						},
						series: {
							dimOpacity: 0.3,
						},
					},
				},
				column: {
					highlightStyle: {
						item: {
							fill: 'white',
							fillOpacity: 0.4,
						},
						series: {
							dimOpacity: 0.3,
						},
					},
				},
			},
		},
	},
};
