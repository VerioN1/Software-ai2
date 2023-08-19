import { json, LoaderFunction } from '@remix-run/node';
import React, { lazy, Suspense } from 'react';
import { useLoaderData, useParams } from '@remix-run/react';
import { ClientOnly } from 'remix-utils';
import { Text } from '~/lib';

const LazyLoadCharts = lazy(() => import('../entities/Graphs/Graphs'));

export const loader: LoaderFunction = async ({ request }) => json({ graphs: null });

const __layoutGraphsLevel = () => {
	const graphsData = useLoaderData<typeof loader>();

	const { level } = useParams();
	return (
		<div>
			<Text>
				{!level ? 'System' : level}
				Visualized data
			</Text>
			<ClientOnly fallback={<div className="center-in-context">loading...</div>}>
				{() => (
					<Suspense fallback="loading...">
						<LazyLoadCharts graphsData={graphsData?.graphs} />
					</Suspense>
				)}
			</ClientOnly>
		</div>
	);
};

export default __layoutGraphsLevel;
