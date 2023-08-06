import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import { Outlet } from '@remix-run/react';
import { Link as RemixLink } from '@remix-run/react/dist/components';
import React from 'react';
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
		<main style={{ height: 'calc(100vh - 4.5rem)' }}>
			<Outlet />
		</main>
	</>
);

export default _Layout;
