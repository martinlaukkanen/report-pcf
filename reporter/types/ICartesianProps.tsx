import { IChartBaseProps } from './IChartBaseProps';

export interface ICartesianProps extends IChartBaseProps {
	type:
		| 'area'
		| 'line'
		| 'scatter'
		| 'bar'
		| 'histogram'
		| 'bubble'
		| 'box-plot'
		| 'heatmap'
		| 'waterfall'
		| 'range-bar'
		| 'range-area'
		| 'bullet'
}
