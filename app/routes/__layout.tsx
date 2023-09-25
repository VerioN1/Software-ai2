import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, User } from '@nextui-org/react';
import { ArrowLeftIcon } from '@nextui-org/shared-icons';
import { Outlet, useParams } from '@remix-run/react';
import { Link as RemixLink } from '@remix-run/react/dist/components';
import React from 'react';
import { AiOutlineRollback } from 'react-icons/ai';
import { NODE_CONFIG_FOR_ROUTE } from '~/consts/navigation/subNodeNavigation';
import { Text } from '~/lib';
import SideBarLink from '~/components/Buttons/SideBarLink/SideBarLink';
import { SIDEBAR_LINKS_ICONS, SIDEBAR_ROUTES } from '~/consts';
import LogoIcon from '~/styles/Icons/LogoIcon';

const _Layout = () => {
	const { node } = useParams();
	const Icon = node ? NODE_CONFIG_FOR_ROUTE[node as keyof typeof NODE_CONFIG_FOR_ROUTE]?.icon : null;
	return (
		<>
			<Navbar maxWidth="full" className="max-w-full" shouldHideOnScroll>
				<NavbarContent justify="start">
					<RemixLink to="/">
						{Icon ? <Icon size="3rem" color="blue" /> : <LogoIcon />}
					</RemixLink>
				</NavbarContent>
				<NavbarBrand className="justify-center">
					<Text size="3xl" className="font-bold text-inherit">
						Softwareye
					</Text>
				</NavbarBrand>
				{/* <NavbarContent className="hidden sm:flex gap-4" justify="center"> */}
				{/*	<NavbarItem> */}
				{/*		<RemixLink to="/customers">Customers</RemixLink> */}
				{/*	</NavbarItem> */}
				{/*	<NavbarItem isActive> */}
				{/*		<RemixLink to="/users">Users</RemixLink> */}
				{/*	</NavbarItem> */}
				{/*	<NavbarItem>Integrations</NavbarItem> */}
				{/* </NavbarContent> */}
				<NavbarContent justify="end">
					<NavbarItem>
						<Button as={Link} color="primary" href="#">
							Log out
						</Button>
					</NavbarItem>
				</NavbarContent>
			</Navbar>

			<main style={{ height: 'calc(100vh - 4.5rem)' }} className="flex place-content-center">
				<nav className="w-[6.7rem] flex flex-col justify-between mt-7 place-items-center relative">
					<section className="flex flex-col gap-5">
						{Object.keys(SIDEBAR_ROUTES).map((route) => {
							const Icon = SIDEBAR_LINKS_ICONS[route];
							return (
								<SideBarLink key={route} to={`/${route}`} className="font-bold">
									<Icon size={35} color="currentColor" />
								</SideBarLink>
							);
						})}
						{node && (
							<SideBarLink to="/" className="font-bold">
								<AiOutlineRollback size={35} color="currentColor" />
							</SideBarLink>
						)}
					</section>
					<section>
						<User
							avatarProps={{
								src: 'https://avatars.githubusercontent.com/u/30373425?v=4'
							}}
							name="Alon"
						/>
					</section>
				</nav>
				<section className="w-full">
					<Outlet />
				</section>
			</main>
		</>
	);
};

export default _Layout;
