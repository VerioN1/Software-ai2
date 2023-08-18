import { AlertSirenIcon, GraphIcon, PoliciesScrollIcon, PulseIcon, ResourcesIcon } from '~/styles';

export const SIDEBAR_ROUTES = {
	graphs: 'graphs',
	metrics: 'metrics',
	alerts: 'alerts',
	policies: 'policies'
};

export const SIDEBAR_LINKS_ICONS = {
	[SIDEBAR_ROUTES.graphs]: GraphIcon,
	[SIDEBAR_ROUTES.metrics]: PulseIcon,
	[SIDEBAR_ROUTES.alerts]: AlertSirenIcon,
	[SIDEBAR_ROUTES.policies]: PoliciesScrollIcon
	// [SIDEBAR_ROUTES.settings]: ResourcesIcon
};
