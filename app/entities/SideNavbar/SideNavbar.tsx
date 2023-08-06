// import type { PropsWithChildren } from 'react';
// import SideNavButton from '~/components/Buttons/SideNavButton/SideNavButton';
// import { AlertSiren, GraphIcon, PoliciesScrollIcon, PulseIcon, Resources } from '~/styles';
// import { DASHBOARD_ROUTES } from '~/consts';
// import { useParams } from '@remix-run/react';
//
// interface Props extends PropsWithChildren {
// }
//
// const SideNavbar = ({children}: Props) => {
// 	const {level} = useParams();
// 	return (
// 		<Navbar hiddenBreakpoint="sm" width={{sm: 70}} pt="md" className="flex flex-col gap-4">
// 			{children}
// 			<SideNavButton label={DASHBOARD_ROUTES.GRAPHS} color="grape"
// 						   to={`/${DASHBOARD_ROUTES.GRAPHS}/${level ?? ''}`}>
// 				<GraphIcon size={32}/>
// 			</SideNavButton>
// 			<SideNavButton label={DASHBOARD_ROUTES.METRICS} color="grape"
// 						   to={`/${DASHBOARD_ROUTES.METRICS}/${level ?? ''}`}>
// 				<PulseIcon size={32}/>
// 			</SideNavButton>
// 			<SideNavButton label={DASHBOARD_ROUTES.ALERTS} color="grape"
// 						   to={`/${DASHBOARD_ROUTES.ALERTS}/${level ?? ''}`}>
// 				<AlertSiren size={32}/>
// 			</SideNavButton>
// 			<SideNavButton label={DASHBOARD_ROUTES.POLICIES} color="grape"
// 						   to={`/${DASHBOARD_ROUTES.POLICIES}/${level ?? ''}`}>
// 				<PoliciesScrollIcon size={32}/>
// 			</SideNavButton>
// 			<SideNavButton label="Create Policies" color="grape" to={`/${DASHBOARD_ROUTES.POLICIES}/${level ?? ''}`}>
// 				<Resources size={32}/>
// 			</SideNavButton>
// 		</Navbar>
// 	);
// };
//
// export default SideNavbar;
//
