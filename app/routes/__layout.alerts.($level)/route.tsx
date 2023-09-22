import { json } from '@remix-run/node';
import { useLoaderData, useParams } from '@remix-run/react';
import React from 'react';
import { ClientOnly } from 'remix-utils';
import AlertsTable from '~/components/Tables/AlertsTable/AlertsTable';
import { Card } from '~/lib';
import type { AlertRow } from '~/types';
import { alertsMock } from '../../../mock';

export const loader = async () => {
	const rows = alertsMock.createAlertRows();
	return json({ rows });
};

const Route = () => {
	const { level } = useParams();
	const { rows } = useLoaderData<{ rows: AlertRow[] }>();
	console.log(level);
	return (
		<Card className="h-full flex flex-col overflow-hidden" style={{ blockSize: '90vh' }}>
			<ClientOnly fallback="loading...">
				{() => (
					<div className="ag-theme-alpine h-screen">
						<AlertsTable initialRows={rows} />
					</div>
				)}
			</ClientOnly>
		</Card>
	);
};

Route.displayName = 'alertsRoute';
export default Route;
