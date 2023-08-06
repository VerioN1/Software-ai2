import type { DragEvent } from 'react';
import React from 'react';
import type { GRID_NODES } from '~/consts';

interface Props {
	nodeType: GRID_NODES;
	nodeName: string;
}

const NewNode = ({ nodeType, nodeName }: Props) => {
	const onDragStart = (event: DragEvent<HTMLDivElement>, color: string) => {
		const dataToSend = {
			nodeName,
			nodeType,
			color
		};

		event.dataTransfer.setData('application/reactflow', JSON.stringify(dataToSend));
		// eslint-disable-next-line no-param-reassign
		event.dataTransfer.effectAllowed = 'move';
	};

	return (
		<div className="dndnode input" onDragStart={(event) => onDragStart(event, 'red')} draggable>
			{nodeName}
		</div>
	);
};

export default NewNode;
