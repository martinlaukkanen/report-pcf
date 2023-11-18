import { IData } from './IData';
import { IAxes } from './IAxes';

export interface IChartBaseProps {
	width: number;
	height: number;
	data: IData[];
	axes: IAxes;
	title: string | null;
	subtitle: string | null;
}
