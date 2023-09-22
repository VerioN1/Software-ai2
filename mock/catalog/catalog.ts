import type { CatalogItem } from '~/types';

export const currentCatalog = {
	_id: '63a700cdb6e5aeb16cd47629',
	name: 'MongoDB',
	icon: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg',
	exporter_form: {
		fields: [
			{
				type: 'TextInput',
				label: 'Connection String',
				name: 'connectionString',
				placeholder: 'mongodb://localhost:27017/',
				tooltip: 'Must include user and password if needed!',
				required: true,
				regex: '/^(mongodb:(?:\\/{2})?)((\\w+?):(\\w+?)@|:?@?)(\\w+?):(\\d+)\\/(\\w+?)$/gm'
			}
		]
	},
	rules: [
		{
			metadata: {
				alertName: 'Mongo Connections'
			},
			fields: [
				{
					type: 'TextInput',
					label: 'Query',
					name: 'query',
					tooltip: 'Number of available connections',
					defaultValue: 'mongodb_connections{instance=~"$env",state="available"} < 2',
					required: true
				},
				{
					type: 'Select',
					label: 'Severity',
					name: 'severity',
					defaultValue: 'critical',
					required: true,
					data: [
						{
							value: 'critical',
							label: 'Critical'
						},
						{
							value: 'major',
							label: 'Major'
						},
						{
							value: 'warning',
							label: 'Warning'
						}
					]
				},
				{
					type: 'TextInput',
					label: 'Summary',
					name: 'summary',
					tooltip: 'The Text Of The Alert',
					defaultValue: 'Instance {{ $labels.instance }} down',
					required: true
				},
				{
					type: 'TextInput',
					label: 'Description',
					name: 'description',
					tooltip: 'Extra Alert Data',
					defaultValue: '{{ $labels.instance }} of job {{ $labels.job }} has been down for more than 5 minutes.',
					required: true
				}
			]
		},
		{
			metadata: {
				alertName: 'Uptime'
			},
			fields: [
				{
					type: 'TextInput',
					label: 'Query',
					name: 'query',
					tooltip: 'Can Show Resets',
					defaultValue: 'mongodb_instance_uptime_seconds{instance=~"$env"} < 1',
					required: true
				},
				{
					type: 'Select',
					label: 'Severity',
					name: 'severity',
					defaultValue: 'critical',
					required: true,
					data: [
						{
							value: 'critical',
							label: 'Critical'
						},
						{
							value: 'major',
							label: 'Major'
						},
						{
							value: 'warning',
							label: 'Warning'
						}
					]
				},
				{
					type: 'TextInput',
					label: 'Summary',
					name: 'summary',
					tooltip: 'The Text Of The Alert',
					defaultValue: 'Instance {{ $labels.instance }} down',
					required: true
				},
				{
					type: 'TextInput',
					label: 'Description',
					name: 'description',
					tooltip: 'Extra Alert Data',
					defaultValue: '{{ $labels.instance }} of job {{ $labels.job }} has been down for more than 5 minutes.',
					required: true
				}
			]
		},
		{
			metadata: {
				alertName: 'Mongo Memory'
			},
			fields: [
				{
					type: 'TextInput',
					label: 'Query',
					name: 'query',
					tooltip: 'Memory Usage',
					defaultValue: 'mongodb_memory{instance=~"$env"} > 80',
					required: true
				}
			]
		},
		{
			metadata: {
				alertName: 'Mongo CPU'
			},
			fields: [
				{
					type: 'TextInput',
					label: 'Query',
					name: 'query',
					tooltip: 'CPU Usage',
					defaultValue: 'mongodb_cpu{instance=~"$env"} > 80',
					required: true
				}
			]
		},
		{
			metadata: {
				alertName: 'Mongo Disk'
			},
			fields: [
				{
					type: 'TextInput',
					label: 'Query',
					name: 'query',
					tooltip: 'Disk Usage',
					defaultValue: 'mongodb_disk{instance=~"$env"} > 80',
					required: true
				}
			]
		},
		{
			metadata: {
				alertName: 'Mongo Connections'
			},
			fields: [
				{
					type: 'TextInput',
					label: 'Query',
					name: 'query',
					tooltip: 'Number of available connections',
					defaultValue: 'mongodb_connections{instance=~"$env",state="available"} < 2',
					required: true
				}
			]
		},
		{
			metadata: {
				alertName: 'PLSQL Errors'
			},
			fields: [
				{
					type: 'TextInput',
					label: 'Query',
					name: 'query',
					tooltip: 'PLSQL Errors',
					defaultValue: 'oracle_plsql_errors{instance=~"$env"} > 0',
					required: true
				}
			]
		},
		{
			metadata: {
				alertName: 'Oracle CPU'
			},
			fields: [
				{
					type: 'TextInput',
					label: 'Query',
					name: 'query',
					tooltip: 'CPU Usage',
					defaultValue: 'oracle_cpu{instance=~"$env"} > 80',
					required: true
				}
			]
		}
	]
} as unknown as CatalogItem;
