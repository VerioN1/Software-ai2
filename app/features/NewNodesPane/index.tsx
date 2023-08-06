import React from 'react';
import NewNode from '~/entities/FlowNodes/NewNode';
import { Text } from '~/lib';
import type { GRID_NODES } from '~/consts';

type Props = {
	newNodes: {
		nodeType: GRID_NODES;
		nodeName: string;
	}[];
};

const Index = ({ newNodes }: Props) => {
	const header = newNodes.length > 0 ? 'Update Your Grid!' : 'No New Nodes!';

	return (
		<div>
			<Text size="2xl">{header}</Text>

			{newNodes.map((node) => (
				<NewNode key={node.nodeName} nodeType={node.nodeType} nodeName={node.nodeName} />
			))}
		</div>
	);
};

Index.displayName = 'NewNodesPane';

export default Index;
