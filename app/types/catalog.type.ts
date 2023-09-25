export type FieldTypes = 'Select' | 'TextInput' | 'Textarea';

export type CatalogDynamicField = {
	type: FieldTypes;
	tooltip: string;
	label: string;
	name: string;
	required: boolean;
	placeholder: string;
	regex: string;
};

export type DynamicForm = {
	fields: CatalogDynamicField[]
};

export type CatalogRule = DynamicForm & {
	metadata: {
		alertName: string;
		tooltip: string;
	} & Record<string, unknown>;
};

export type CatalogItem = {
	exporter_form: DynamicForm;
	fields: CatalogDynamicField[];
	alert_rules: {
		alert_name: string; // Text Input - free text
		query: string; // Text Input - free text
		for: string; // Number Input + select Unit (m, s, h, d, w, y)ֿ optional
		severity: string; // Select - Critical, Major, Minor, Warning, Info
		summary: string; // Text Input - free text
		description: string; //	Text Area - free text
	}[];
	_id: string;
	name: string;
	icon: string;
	rules: CatalogRule[];
};
export type Catalog = CatalogItem[];
