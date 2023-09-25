import { BsDatabase } from 'react-icons/bs';
import { NodeJSIcon, ReactLogo } from '~/styles';

export const NODE_CONFIG_FOR_ROUTE = {
	'backend-server': {
		icon: NodeJSIcon,
		name: 'Your\'re In Backend Node View',
	},
	'client-server': {
		icon: ReactLogo,
		name: 'Your\'re In Client Node View',
	},
	database: {
		icon: BsDatabase,
		name: 'Your\'re In Database Node View',
	}
} as const;
