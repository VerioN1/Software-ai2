import { ArrowLeftIcon } from '@nextui-org/shared-icons';
import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData, Link, useParams } from '@remix-run/react';
import React from 'react';
import MonitoringSection from '~/components/MonitoringSection/MonitoringSection';
import StepsForm from '~/components/StepsForm/StepsForm';
import { Button, TextInput } from '~/lib';
import { NEW_MONITORING_CATALOG } from '../../mock/catalog';
import { NEW_MONITORING_FORM } from '../../mock/catalog/cm-form';

export const loader: LoaderFunction = async ({ params }) => json(NEW_MONITORING_FORM[params.service as keyof typeof NEW_MONITORING_FORM]);

const CreateMonitoringForm = () => {
	const data = useLoaderData<typeof loader>();
	console.log(data);
	const { service } = useParams();
	return (
		<main className="flex flex-col p-8">
			<div className="w-full">
				{/* @ts-ignore */}
				<Button as={Link} color="primary" to="/">
					<ArrowLeftIcon />
				</Button>
			</div>
			<div className="flex place-items-center flex-col gap-10 w-[50%] max-w-[25rem] place-self-center">
				<h1 className="text-3xl font-bold">
					Create
					{' '}
					{data.title}
					{' '}
					Monitoring
				</h1>
				<StepsForm phases={data.phases} />
			</div>
		</main>
	);
};

export default CreateMonitoringForm;
