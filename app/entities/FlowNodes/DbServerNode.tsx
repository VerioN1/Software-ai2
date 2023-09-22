import type { FC } from 'react';
import React from 'react';
import type { NodeProps } from 'reactflow';
import { Text, Tooltip } from '~/lib';
import { MongoDBIcon } from '~/styles';
import NodeTemplate from '~/entities/FlowNodes/NodeTemplate';

const DbServerNode: FC<NodeProps> = ({ data, ...rest }) => (
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
				<MongoDBIcon size={34} />
			</div>
		</Tooltip>
	</NodeTemplate>
);

export default DbServerNode;
