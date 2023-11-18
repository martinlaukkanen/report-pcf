export interface Category {
	field: string;
}

export interface Series {
	field: string;
	aggregate: 'avg' | 'sum' | 'min' | 'max' | 'count';
}

export interface IAxes {
	categories: string[];
	series: Series[];
}
