import React from 'react';
import { Chip } from '~/lib';

interface Props {
	value: 'High' | 'Medium' | 'Low';
}

const mapValueToColor = {
	Low: 'success',
	Medium: 'warning',
	High: 'danger'
} as const;

const PoliciesChip = ({ value }: Props) => (
	<div className="flex items-center justify-center h-full">
		<Chip color={mapValueToColor[value]} variant="shadow">
			{value}
		</Chip>
	</div>
);

export default PoliciesChip;
