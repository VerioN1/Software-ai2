import { Button, Divider, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import { Outlet } from '@remix-run/react';
import { Link as RemixLink } from '@remix-run/react/dist/components';
import React from 'react';
import SideBarLink from '~/components/Buttons/SideBarLink/SideBarLink';
import { SIDEBAR_LINKS_ICONS, SIDEBAR_ROUTES } from '~/consts';
import { Text } from '~/lib';

const _Layout = () => (
	<>
		<Navbar shouldHideOnScroll>
			<NavbarBrand>
				<Text size="3xl" className="font-bold text-inherit">
					Software AI
				</Text>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<RemixLink to="/customers">Customers</RemixLink>
				</NavbarItem>
				<NavbarItem isActive>
					<RemixLink to="/users">Users</RemixLink>
				</NavbarItem>
				<NavbarItem>Integrations</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<Button as={Link} color="primary" href="#" variant="flat">
						Log out
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
		<Divider />
		<main style={{ height: 'calc(100vh - 4.5rem)' }} className="flex ">
			<nav className="w-[6rem] flex flex-col  gap-5 mt-2">
				{Object.keys(SIDEBAR_ROUTES).map((route) => {
					const Icon = SIDEBAR_LINKS_ICONS[route];
					return (
						<SideBarLink key={route} to={`/${route}`} className="font-bold">
							<Icon size={42} color="hsl(var(--nextui-secondary-500))" />
						</SideBarLink>
					);
				})}
			</nav>
			<Divider orientation="vertical" />
			<section className="w-full">
				<Outlet />
			</section>
		</main>
	</>
);

export default _Layout;
