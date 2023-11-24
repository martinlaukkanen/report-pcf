export interface IControlDescription {
	Id: string;
	Label: string;
	Name: string;
	ShowLabel: boolean;
	Visible: boolean;
	Disabled: boolean;
	Parameters: any;
	ControlLayout: number;
	UniqueId: string;
	DomId: string;
	IsUnbound: boolean;
	ParentSectionName: string;
	ParentTabId: string;
	ParentCellId: string;
	IsRequired: boolean;
	HasContext: boolean;
}
