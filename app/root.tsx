import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction, LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import RCSS from 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import GCSS from 'ag-grid-community/styles/ag-theme-alpine.css';
import useDarkMode from 'use-dark-mode';
import { Providers } from '~/providers';

import { getUser } from '~/services/user.service';
import stylesheet from '~/tailwind.css';
import flowcss from '~/styles/flow.css';

export const links: LinksFunction = () => [
	...(cssBundleHref
		? [{ rel: 'stylesheet', href: cssBundleHref }]
		: [
				{ rel: 'stylesheet', href: stylesheet },
				{ rel: 'stylesheet', href: flowcss },
				{ rel: 'stylesheet', href: RCSS },
				{ rel: 'stylesheet', href: GCSS }
		  ])
];

export const loader = async ({ request }: LoaderArgs) => json({ user: await getUser(request) });

const App = () => {
	const darkMode = useDarkMode(false);

	return (
		<html lang="en" className="h-full">
			<head title="STMS-V2">
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className={`${darkMode.value ? '' : ''} text-foreground bg-background`}>
				<Providers>
					<Outlet />
					<ScrollRestoration />
					<Scripts />
					<LiveReload />
				</Providers>
			</body>
		</html>
	);
};

export default App;
