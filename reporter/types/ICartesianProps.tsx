import { IChartBaseProps } from './IChartBaseProps';

export interface ICartesianProps extends IChartBaseProps {
	type: 'line' | 'scatter' | 'area' | 'bar' | 'column' | 'histogram';
}
