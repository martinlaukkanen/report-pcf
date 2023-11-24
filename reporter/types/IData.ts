export interface IData {
	id: string;
	record: ComponentFramework.PropertyHelper.DataSetApi.EntityRecord;
	[key: string]: any;
	formattedValues: {
		[key: string]: any;
	};
}

export interface IAggregate {
	id: number | string;
	label: string;
	[key: string]: any;
}
