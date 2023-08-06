import type { FC } from 'react';
import React from 'react';
import type { NodeProps } from 'reactflow';
import { Text, Tooltip } from '~/lib';
import { NodeJS } from '~/styles';
import NodeTemplate from './NodeTemplate';

const BackendServerNode: FC<NodeProps> = ({ data, ...rest }) => (
	<NodeTemplate nodeProps={{ data, ...rest }}>
		<Tooltip
			label={
				<div className="flex justify-center items-center flex-col">
					<div>
						<strong>{data.label}</strong>
					</div>
					{data.description}
					<Text>STATUS: O.K</Text>
				</div>
			}
		>
			<div>
				<NodeJS size={34} />
			</div>
		</Tooltip>
	</NodeTemplate>
);

export default BackendServerNode;
