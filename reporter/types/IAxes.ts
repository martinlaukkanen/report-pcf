export interface ISeries {
	field: string;
	aggregate: 'avg' | 'sum' | 'min' | 'max' | 'count';
}

export interface IOption {
	id: number;
	label: string;
	color?: string;
}

export interface ICategory {
	field: string;
	label: string;
	colors?: string[];
	options?: IOption[];
}

export interface IAxes {
	categories: ICategory[];
	series: ISeries[];
}
