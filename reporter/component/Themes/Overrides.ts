import { AgChartThemeOverrides, AgPieSeriesThemeOverrides } from 'ag-charts-community';

const MSFonts =
	'"Segoe UI", "Segoe UI Web (West European)", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif';

export const Overrides: AgChartThemeOverrides = {
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
	},
	pie: {
		series: {
			highlightStyle: {
				item: {
					fill: 'white',
					fillOpacity: 0.4,
					strokeWidth: 2,
				},
			},
		},
	},
	bar: {
		series: {
			highlightStyle: {
				item: {
					fill: 'white',
					fillOpacity: 0.4,
					strokeWidth: 2,
				},
				series: {
					dimOpacity: 0.3,
				},
			},
		},
	},
	area: {
		series: {
			highlightStyle: {
				series: {
					dimOpacity: 0.3,
					strokeWidth: 2,
				},
			},
		},
	},
	line: {
		series: {
			highlightStyle: {
				item: {
					fill: 'white',
					fillOpacity: 0.4,
					strokeWidth: 6,
				},
			},
		},
	},
};
