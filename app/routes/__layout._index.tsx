import { Divider, useDisclosure } from '@nextui-org/react';
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { isRouteErrorResponse, useLoaderData, useRouteError } from '@remix-run/react';
import { useEffect, useState } from 'react';
import reactFlowStyles from 'reactflow/dist/style.css';
import { ClientOnly } from 'remix-utils';
import { ErrorMessage } from '~/components';
import Drawer from '~/components/Drawer/Drawer';
import { FlowGrid } from '~/features';
import { Loader } from '~/lib';
import { topologyService, userService } from '~/services';
import styles from '~/styles/flow.css';
import { GRID_NODES } from '~/consts';

export const loader: LoaderFunction = async ({ request }) => {
	const { id: userId } = await userService.requireUser(request);
	const topology = await topologyService.getTopologyNodes(userId);

	const newNodes = [
		{
			nodeType: GRID_NODES.NODE_SERVER,
			nodeName: 'node Service'
		}
	];

	return json({ topology, newNodes });
};

let didRender = false;

export default function _index() {
	const { topology } = useLoaderData<Awaited<ReturnType<typeof loader>>>();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [fallBackComponent, setFallbackComponent] = useState(
		<div className="center-in-context">
			<Loader overlayBlur={2} />
		</div>
	);

	useEffect(() => {
		if (didRender) {
			return;
		}

		didRender = true;
		setTimeout(() => setFallbackComponent(<ErrorMessage message="couldn't load grid" />), 3000);
	}, []);

	return (
		<>
			{/* <header className="app-header">React Flow - Remix Example</header> */}
			<ClientOnly fallback={fallBackComponent}>
				{() => <FlowGrid openDrawer={onOpen} initialEdges={topology?.edges} initialNodes={topology?.nodes} />}
			</ClientOnly>
			<Drawer isOpen={isOpen} onClose={onClose}>
				<div className="drawer-content">
					<h1>Drawer Content</h1>
					<Divider />
					<p>Drawer content goes here</p>
				</div>
			</Drawer>
		</>
	);
}

export const CatchBoundary = () => {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		return (
			<div>
				<h1>
					{error.status}
					{error.statusText}
				</h1>
				<p>{error.data}</p>
			</div>
		);
	}

	if (error instanceof Error) {
		return (
			<div>
				<h1>Error</h1>
				<p>{error.message}</p>
				<p>The stack trace is:</p>
				<pre>{error.stack}</pre>
			</div>
		);
	}

	return <h1>Unknown Error</h1>;
};

export function links() {
	return [
		{ rel: 'stylesheet', href: reactFlowStyles },
		{ rel: 'stylesheet', href: styles }
	];
}
