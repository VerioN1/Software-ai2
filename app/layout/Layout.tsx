import React from 'react';
import { Link as RemixLink } from '@remix-run/react';
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
	<>
		<Navbar shouldHideOnScroll>
			<NavbarBrand>
				<p className="font-bold text-inherit">Varcode</p>
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
		<main>{children}</main>
	</>
);

export default Layout;
