export interface ISeries {
	field: string;
	aggregate: 'avg' | 'sum' | 'min' | 'max' | 'count';
}

export interface ICategory {
	field: string;
	label: string;
	colors?: string[];
}

export interface IAxes {
	categories: ICategory[];
	series: ISeries[];
}
