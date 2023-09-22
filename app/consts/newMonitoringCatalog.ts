import { DiNginx } from 'react-icons/di';
import { SiApachekafka, SiKubernetes, SiRabbitmq } from 'react-icons/si';
import {
	AWSIcon, AzureCloudIcon,
	CassandraIcon,
	FirebaseIcon, GCPIcon,
	MongoDBIcon,
	MSSQLIcon,
	MySQLIcon,
	PostgresSQLIcon,
	RedisIcon
} from '~/styles';

export const CATALOG_ITEM_TO_ICON = {
	firebase: FirebaseIcon,
	mongo: MongoDBIcon,
	postgres: PostgresSQLIcon,
	redis: RedisIcon,
	sqlServer: MSSQLIcon,
	sqlite: MSSQLIcon,
	mySql: MySQLIcon,
	cassandra: CassandraIcon,
	aws: AWSIcon,
	azure: AzureCloudIcon,
	gcp: GCPIcon,
	kafka: SiApachekafka,
	kubernetes: SiKubernetes,
	nginx: DiNginx,
	rabbitmq: SiRabbitmq,
	nifi: SiRabbitmq,
} as const;
