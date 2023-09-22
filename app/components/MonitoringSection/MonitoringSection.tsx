import React from 'react';
import { CATALOG_ITEM_TO_ICON } from '~/consts';
import { Button, Card, Text } from '~/lib';

type Props = {
	sectionTitle: string;
	applications: { title: string, key: string }[];
};

const MonitoringSection = ({ sectionTitle, applications }: Props) => (
	<div className="w-[70%] overflow-x-auto">
		<Text size="6xl">{sectionTitle}</Text>
		<div className="mt-6 overflow-x-auto grid gap-x-6 grid-flow-col justify-start">
			{applications.map((application) => {
				const Icon = CATALOG_ITEM_TO_ICON[application.key as keyof typeof CATALOG_ITEM_TO_ICON];
				return (
					<Button className="p-9 w-[12rem] h-[12rem]" isIconOnly variant="bordered" key={application.key}>
						<div className="flex flex-col place-content-center place-items-center gap-3">
							{Icon ? <Icon size="5rem" /> : null}
							<Text size="xl">{application.title}</Text>
						</div>
					</Button>
				);
			})}
		</div>
	</div>
	);

export default MonitoringSection;
