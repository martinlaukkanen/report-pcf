export interface IData {
	id: string;
	record: ComponentFramework.PropertyHelper.DataSetApi.EntityRecord;
	[key: string]: any;
	formattedValues: {
		[key: string]: any;
	};
}
