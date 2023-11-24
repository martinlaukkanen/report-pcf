import { AgChartTheme } from 'ag-charts-community';

export const fluentTheme: AgChartTheme = {
	baseTheme: 'ag-default',
	palette: {
		fills: [
			'#ffaa44',
			'#4f6bed',
			'#8764b8',
			'#00b7c3',
			'#ca5010',
			'#8cbd18',
			'#881798',
			'#038387',
			'#da3b01',
			'#498205',
			'#8378de',
			'#69797e',
			'#0078d4',

			'#750b1c',
			'#603d30',
			'#fce100',
			'#005b70',
			'#c19c00',
			'#d13438',
			'#8e562e',
			'#e3008c',
			'#00ad56',
			'#986f0b',
			'#004e8c',
			'#a4262c',
			'#005e50',
			'#5c2e91',
			'#0b6a0b',
			'#9b0062',
			'#373277',
			'#c239b3',
		],
		strokes: ['#7a7574'],
	},
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
