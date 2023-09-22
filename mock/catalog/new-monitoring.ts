export const NEW_MONITORING_CATALOG = {
	db: {
		title: 'Databases',
		items: [
			{
				title: 'Fire base',
				key: 'firebase'
			},
			{
				title: 'Mongo DB',
				key: 'mongo'
			},
			{
				title: 'Postgres',
				key: 'postgres'
			},
			{
				title: 'Redis',
				key: 'redis'
			},
			{
				title: 'SQL Server',
				key: 'sqlServer'
			},
			{
				title: 'MySQL',
				key: 'mySql'
			},
			{
				title: 'Cassandra',
				key: 'cassandra'
			},
			{
				title: 'SQLite',
				key: 'sqlite'
			}
		]
	},
	cloudProviders: {
		title: 'Cloud Providers',
		items: [
			{
				title: 'AWS',
				key: 'aws'
			},
			{
				title: 'Azure',
				key: 'azure'
			},
			{
				title: 'GCP',
				key: 'gcp'
			}
		]
	},
	applications: {
		title: 'Applications',
		items: [
			{
				title: 'Kafka',
				key: 'kafka'
			},
			{
				title: 'Kubernetes',
				key: 'kubernetes'
			},
			{
				title: 'Nginx',
				key: 'nginx'
			},
			{
				title: 'RabbitMQ',
				key: 'rabbitmq'
			},
			{
				title: 'NiFi',
				key: 'nifi'
			}
		]
	}
} as const;
