import { IAggregate } from './IData';
import { IAxes } from './IAxes';

export interface IChartBaseProps {
	data: IAggregate[];
	axes: IAxes;
	title: string | null;
	subtitle: string | null;
}
