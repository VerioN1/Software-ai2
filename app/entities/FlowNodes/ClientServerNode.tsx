import type { FC } from 'react';
import React from 'react';
import type { NodeProps } from 'reactflow';
import { Tooltip } from '~/lib';
import { ReactLogo } from '~/styles';
import NodeTemplate from '~/entities/FlowNodes/NodeTemplate';

const ClientServerNode: FC<NodeProps> = ({ data, ...rest }) => (
	<NodeTemplate nodeProps={{ data, ...rest }}>
		<Tooltip
			content={
				<div className="flex justify-center items-center flex-col">
					<div>
						<strong>{data.label}</strong>
					</div>
					{data.description}
					<label>STATUS: O.K</label>
				</div>
			}
		>
			<div>
				<ReactLogo size={34} />
			</div>
		</Tooltip>
	</NodeTemplate>
);

export default ClientServerNode;
