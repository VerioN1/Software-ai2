import React from 'react';
import { MailIcon, NotificationsActiveIcon, SlackIcon, WhatsAppIcon } from '~/styles';
import { Card, Divider, Text } from '~/lib';
import type { CatalogRule } from '~/types/catalog.type';

interface Props {
	rule: CatalogRule;
}

const PolicyCard = ({ rule }: Props) => (
	<Card shadow="sm" className="flex flex-col min-w-[22rem] border-none bg-background/60 p-4" key={rule.metadata.alertName} radius="lg">
		<div className="flex items-center w-full text-success-500">
			<NotificationsActiveIcon size="1.7rem" color="currentcolor" />
			<Text size="lg" className="w-full font-bold text-center text-zinc-600 truncate hover:text-clip">
				{rule.metadata.alertName}
			</Text>
		</div>
		{/* <Divider/> */}
		<div className="flex my-2 justify-between">
			<div className="flex flex-col">
				<Text size="sm" className="text-zinc-400">
					Severity
				</Text>
				<Text size="md">Warning</Text>
				<Text size="md">Major</Text>
				<Text size="md">Critical</Text>
			</div>
			<Divider orientation="vertical" className="mx-5" />
			<div className="flex flex-col justify-center items-center">
				<Text size="sm" className="text-zinc-400">
					Threshold
				</Text>
				<Text size="md">{'> 5'}</Text>
				<Text size="md">{'> 6'}</Text>
				<Text size="md">{'> 7'}</Text>
			</div>
			<Divider orientation="vertical" className="mx-5" />
			<div className="flex flex-col">
				<Text size="sm" className="text-zinc-400">
					Channels
				</Text>
				<div className="flex gap-2">
					<SlackIcon size="1.5rem" />
				</div>
				<div className="flex gap-2">
					<MailIcon size="1.5rem" />
				</div>
				<div className="flex gap-2">
					<MailIcon size="1.5rem" />
					<WhatsAppIcon size="1.5rem" />
					<SlackIcon size="1.5rem" />
				</div>
			</div>
		</div>
	</Card>
);

export default PolicyCard;
