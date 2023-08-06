import React from 'react';
import { MailIcon, NotificationsActiveIcon, SlackIcon, WhatsAppIcon } from '~/styles';
import { Card, Divider, Text } from '~/lib';
import type { CatalogRule } from '~/types/catalog.type';

interface Props {
	rule: CatalogRule;
}

const PolicyCard = ({ rule }: Props) => (
	<Card className="flex flex-col" miw="22rem" key={rule.metadata.alertName} radius="lg">
		<div className="flex items-center w-full">
			<NotificationsActiveIcon size="1.7rem" color="#123232" />
			<Text size="lg" className="w-full font-bold text-center truncate hover:text-clip">
				{rule.metadata.alertName}
			</Text>
		</div>
		{/* <Divider/> */}
		<div className="flex my-2 justify-between">
			<div className="flex flex-col">
				<Text size="sm" color="dimmed">
					Severity
				</Text>
				<Text size="md">Warning</Text>
				<Text size="md">Major</Text>
				<Text size="md">Critical</Text>
			</div>
			<Divider orientation="vertical" mx="0.5rem" />
			<div className="flex flex-col justify-center items-center">
				<Text size="sm" color="dimmed">
					Threshold
				</Text>
				<Text size="md">{'> 5'}</Text>
				<Text size="md">{'> 6'}</Text>
				<Text size="md">{'> 7'}</Text>
			</div>
			<Divider orientation="vertical" mx="0.5rem" />
			<div className="flex flex-col">
				<Text size="sm" color="dimmed">
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
