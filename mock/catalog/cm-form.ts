import { NEW_MONITORING_CATALOG } from './new-monitoring';

export const NEW_MONITORING_FORM = {
	[NEW_MONITORING_CATALOG.db.items[1].key]: {
		title: 'Mongo DB',
		phases: [
			{
				title: 'Phase 1',
				form: [
					{
						type: 'input',
						label: 'Host',
						name: 'host',
						placeholder: 'Enter host',
					},
					{
						type: 'input',
						label: 'Port',
						name: 'port',
						placeholder: 'Enter port',
					},
					{
						type: 'input',
						label: 'Username',
						name: 'username',
						placeholder: 'Enter username',
					},
					{
						type: 'input',
						label: 'token',
						name: 'token',
						placeholder: 'Enter token',
					}
				]
			},
			{
				title: 'Phase 2',
				form: [
					{
						type: 'input',
						label: 'Host',
						name: 'host',
						placeholder: 'Enter host',
					},
					{
						type: 'input',
						label: 'Port',
						name: 'port',
						placeholder: 'Enter port',
					}
					]
			}
		]
	}
};
