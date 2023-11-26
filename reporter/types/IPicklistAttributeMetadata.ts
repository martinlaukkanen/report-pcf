export interface IPicklistAttributeMetadata {
	'@odata.context': string;
	LogicalName: string;
	MetadataId: string;
	OptionSet: OptionSet;
}

export interface OptionSet {
	MetadataId: string;
	Options: Option[];
}

export interface Option {
	Value: number;
	Color: string;
	IsManaged: boolean;
	ExternalValue: string;
	ParentValues: any[];
	Tag: null;
	MetadataId: null;
	HasChanged: null;
	Label: Description;
	Description: Description;
}

export interface Description {
	LocalizedLabels: LocalizedLabel[];
	UserLocalizedLabel: LocalizedLabel;
}

export interface LocalizedLabel {
	Label: string;
	LanguageCode: number;
	IsManaged: boolean;
	MetadataId: string;
	HasChanged: null;
}
