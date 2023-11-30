import { AgChartTheme } from 'ag-charts-community';
import tinycolor from 'tinycolor2';

const MSFonts =
	'"Segoe UI", "Segoe UI Web (West European)", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif';

export const defaultTheme: AgChartTheme = {
	baseTheme: 'ag-default',
	palette: {
		fills: [
			'#742774',
			'#B33770',
			'#E15A64',
			'#FD8B57',
			'#FFC156',
			'#A6B753',
			'#59A269',
			'#178678',
			'#166773',
			'#2F4858',
			'#3C689C',
			'#874B73',
		],
		strokes: [],
	},
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

// Setup stroke colors
defaultTheme.palette?.fills.forEach((color) => {
	defaultTheme.palette?.strokes.push(tinycolor(color).darken().toString());
});
