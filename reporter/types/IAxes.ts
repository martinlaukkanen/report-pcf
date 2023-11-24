export interface Category {
	field: string;
}

export interface Series {
	field: string;
	aggregate: 'avg' | 'sum' | 'min' | 'max' | 'count';
}

export interface ICategory {
	field: string;
	label: string;
}

export interface IAxes {
	categories: ICategory[];
	series: Series[];
}
