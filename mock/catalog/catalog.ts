import type { CatalogItem } from '~/types';

export const currentCatalog = [{
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
				alertName: 'Mongo Connections',
				tooltip: 'mongo tooltip'
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
				alertName: 'Uptime',
				tooltip: 'mongo tooltip'
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
				alertName: 'Mongo Memory',
				tooltip: 'mongo tooltip'
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
				alertName: 'Mongo CPU',
				tooltip: 'mongo tooltip'
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
				alertName: 'Mongo Disk',
				tooltip: 'mongo tooltip'
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
				alertName: 'Mongo Connections',
				tooltip: 'mongo tooltip'
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
				alertName: 'PLSQL Errors',
				tooltip: 'mongo tooltip'
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
				alertName: 'Oracle CPU',
				tooltip: 'mongo tooltip'
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
},
	{
		_id: '63a700cdb4444eb16cd47629',
		name: 'Servers',
		icon: 'https://your-server-icon-url.com',
		exporter_form: {
			fields: [
				{
					type: 'TextInput',
					label: 'Server URL',
					name: 'serverURL',
					placeholder: 'http://localhost:3000',
					tooltip: 'Enter the URL of your Node.js server',
					required: true,
					regex: '/^(http|https):\\/\\/[A-Za-z0-9\\.-]+:[0-9]+$/'
				}
			]
		},
		rules: [
			{
				metadata: {
					alertName: 'Server Connections',
					tooltip: 'node tooltip'
				},
				fields: [
					{
						type: 'TextInput',
						label: 'Query',
						name: 'query',
						tooltip: 'Number of active connections',
						defaultValue: 'server_connections{instance=~"$env"} < 2',
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
					alertName: 'Server CPU',
					tooltip: 'node tooltip'
				},
				fields: [
					{
						type: 'TextInput',
						label: 'Query',
						name: 'query',
						tooltip: 'CPU Usage',
						defaultValue: 'server_cpu{instance=~"$env"} > 80',
						required: true
					}
				]
			},
			{
				metadata: {
					alertName: 'Server Exceptions',
					tooltip: 'node tooltip'
				},
				fields: [
					{
						type: 'TextInput',
						label: 'Query',
						name: 'query',
						tooltip: 'Node errors',
						defaultValue: 'server_errors{instance=~"$env"} > 10',
						required: true
					}
				]
			},
			{
				metadata: {
					alertName: 'Nodejs Memory',
					tooltip: 'node tooltip'
				},
				fields: [
					{
						type: 'TextInput',
						label: 'Query',
						name: 'query',
						tooltip: 'Memory Usage',
						defaultValue: 'nodejs_memory{instance=~"$env"} > 80',
						required: true
					}
				]
			},
		]
	},
	{
		_id: '34234234234234234234', // Different ID for React Front-End
		name: 'React Front-End Server',
		icon: 'https://your-frontend-icon-url.com',
		exporter_form: {
			fields: [
				{
					type: 'TextInput',
					label: 'Server URL',
					name: 'serverURL',
					placeholder: 'http://localhost:3000',
					tooltip: 'Enter the URL of your React front-end server',
					required: true,
					regex: '/^(http|https):\\/\\/[A-Za-z0-9\\.-]+:[0-9]+$/'
				}
			]
		},
		rules: [
			{
				metadata: {
					alertName: 'React Server Status',
					tooltip: 'react card'
				},
				fields: [
					{
						type: 'TextInput',
						label: 'Query',
						name: 'query',
						tooltip: 'Server status query (mocked)',
						defaultValue: 'frontend_server_status{instance=~"$env"} < 2', // Mocked query
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
						defaultValue: 'Front-end server {{ $labels.instance }} down', // Mocked summary
						required: true
					},
					{
						type: 'TextInput',
						label: 'Description',
						name: 'description',
						tooltip: 'Extra Alert Data',
						defaultValue: '{{ $labels.instance }} of job {{ $labels.job }} has been down for more than 5 minutes.', // Mocked description
						required: true
					}
				]
			},
			{
				metadata: {
					alertName: 'React Server Load',
					tooltip: 'react card'
				},
				fields: [
					{
						type: 'TextInput',
						label: 'Query',
						name: 'query',
						tooltip: 'Server load query (mocked)',
						defaultValue: 'frontend_server_load{instance=~"$env"} > 80', // Mocked query
						required: true
					}
				]
			},
			{
				metadata: {
					alertName: 'React Server Errors',
					tooltip: 'react card'
				},
				fields: [
					{
						type: 'TextInput',
						label: 'Query',
						name: 'query',
						tooltip: 'Server error query (mocked)',
						defaultValue: 'frontend_server_errors{instance=~"$env"} > 0', // Mocked query
						required: true
					}
				]
			},
			// Add more rules as needed for your React front-end server monitoring (mocked)
		]
	}

] as unknown as CatalogItem[];
