import { ArrowLeftIcon } from '@nextui-org/shared-icons';
import { json } from '@remix-run/node';
import { useLoaderData, Link } from '@remix-run/react';
import React from 'react';
import MonitoringSection from '~/components/MonitoringSection/MonitoringSection';
import { Button, TextInput } from '~/lib';
import { NEW_MONITORING_CATALOG } from '../../mock/catalog';

export const loader = async () => json(NEW_MONITORING_CATALOG);

const CreateMonitoring = () => {
	const data = useLoaderData<typeof loader>();
	console.log(data);
	return (
		<main className="flex flex-col p-8">
			<div className="w-full">
				{/* @ts-ignore */}
				<Button as={Link} color="primary" to="/">
					<ArrowLeftIcon />
				</Button>
			</div>
			<div className="flex place-items-center flex-col gap-10">
				<h1 className="text-3xl font-bold">Create Monitoring</h1>
				<TextInput label="Search Field" className="w-[22rem]" />
				{
					Object.entries(data).map(([key, field]) => (
						<MonitoringSection sectionTitle={field.title} applications={field.items} key={key} />
					))
				}
			</div>
		</main>
	);
};

export default CreateMonitoring;
