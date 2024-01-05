import { AgChartTheme } from 'ag-charts-community';
import tinycolor from 'tinycolor2';
import { FluentTheme, Overrides, PowerAppsTheme, SimpleTheme } from './Themes';
import { ITheme } from '../types';

export class Themeing {
	private static readonly defaultTheme: AgChartTheme = PowerAppsTheme;

	public static getTheme(theme: ITheme | null, customTheme: string | null): AgChartTheme {
		const chartTheme = Themeing.selectChartTheme(theme, customTheme);

		// Setup stroke colors
		if (!chartTheme.palette?.strokes?.length && chartTheme.palette) {
			chartTheme.palette.strokes =
				chartTheme.palette?.fills.map((color) => tinycolor(color).darken().toString()) ?? [];
		}

		// Setup standard style overrieds
		chartTheme.overrides = Overrides;

		return chartTheme;
	}

	private static selectChartTheme(theme: string | null, customTheme: string | null): AgChartTheme {
		switch (theme) {
			case 'CustomTheme':
				const chartTheme: AgChartTheme = {
					baseTheme: 'ag-default',
					palette: {
						fills: Themeing.getCustomFills(customTheme),
						strokes: [],
					},
				};
				if (!chartTheme.palette?.fills?.length) {
					return Themeing.defaultTheme;
				}
				return chartTheme;

			case 'FluentTheme':
				return FluentTheme;

			case 'PowerAppsTheme':
				return PowerAppsTheme;

			case 'SimpleTheme':
				return SimpleTheme;

			default:
				return Themeing.defaultTheme;
		}
	}

	private static getCustomFills(customTheme: string | null): string[] {
		if (!customTheme) {
			return [];
		}

		// Split the csv themes after removing any spaces
		const colors = customTheme.replace(/ /g, '').split(',');
		let fills: string[] = [];

		colors.forEach((fill) => {
			const rx = /^#([0-9a-f]{3}){1,2}$/i;
			if (fill.match(rx)) {
				fills.push(fill);
			} else {
				console.error(`Invalid custom theme color ${fill}, must be in the format #FFFFFF or #FFF`);
			}
		});
		// Filter out any invalid colors
		fills = fills.filter((f) => f);
		return fills;
	}
}
