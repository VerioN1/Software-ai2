import type { FILTERS_NAMES } from '~/consts';
import type { Valueof } from '~/types/helper.types';

export type LogRow = {
	id: string;
	name: string;
	complete: number;
	priority: 'Low' | 'Medium' | 'High' | '';
	issueType: string;
	startDate: string;
}

export type AlertRow = {
	name: string;
	startTime: string;
	result: string;
	duration: string;
	policies: 'Low' | 'Medium' | 'High' | '';
}

export type ITableFilter<T extends Record<string, any>> = {
	filters: T
	availableData: Record<string, any[]>
};

export enum TableTypes {
	LOGS = 'logs',
	ALERTS = 'alerts'
}

export type TableFilter = {
	[key in Valueof<typeof FILTERS_NAMES>]: {
		filterFunction: (filter: any, row: any) => boolean;
		defaultValue: any;
	}
}

export type TableMetaData<T extends Record<string, any>, Y extends string> = {
	[key in Y]: {
		key: keyof T;
		name: string;
		filter?: TableFilter;
	}
}
