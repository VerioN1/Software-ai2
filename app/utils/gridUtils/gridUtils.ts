import type { Node } from 'reactflow';
import type { CalculateGridClickCoordinatesParams, GridParams } from '~/utils/gridUtils/types';
import { GRID_EVENTS_REQUESTS_TYPES, GRID_EVENTS_RESPONSE_TYPES } from '~/consts';
import { flowCoordinatesSubject } from '~/features/FlowGrid/model';

const accessor =	(func: (...a: any[]) => void) =>
	(...params: any[]) =>
	(injection: any) =>
		func(injection, ...params);

const calculateGridClickCoordinates = (
	{ reactFlowWrapper, reactFlowInstance }: GridParams,
	{ event, currentNodeId, position: nodePosition }: CalculateGridClickCoordinatesParams
) => {
	console.log(nodePosition);

	if (reactFlowInstance && event.clientY) {
		const reactFlowBounds = reactFlowWrapper.getBoundingClientRect();

		const position = reactFlowInstance.project({
			x: event.clientX - reactFlowBounds.left,
			y: event.clientY - reactFlowBounds.top
		});

		flowCoordinatesSubject.next({
			eventType: GRID_EVENTS_RESPONSE_TYPES.CALCULATE_COORDINATES_RES,
			data: { position, currentNodeId }
		});
	}
};

const openRightClickMenu = ({ setXyPosition, setContext }: {
		setXyPosition: (params: any) => void;
		setContext: any;
	},
	{ position }: any
) => {
	setContext(true);
	setXyPosition({ ...position });
};

const deleteGridNode = ({ reactFlowInstance }: GridParams, { nodeId }: { nodeId: string }) => {
	const nodeToRemove = reactFlowInstance.getNode(nodeId);

	if (nodeToRemove) {
		reactFlowInstance.deleteElements({ nodes: [nodeToRemove] });
	}
};

export const gridEventsRequestsTypes = {
	[GRID_EVENTS_REQUESTS_TYPES.CALCULATE_COORDINATES_REQ]: accessor(calculateGridClickCoordinates),
	[GRID_EVENTS_REQUESTS_TYPES.DELETE_NODE_REQ]: accessor(deleteGridNode)
};

export const gridEventsResponseTypes = {
	[GRID_EVENTS_RESPONSE_TYPES.CALCULATE_COORDINATES_RES]: accessor(openRightClickMenu)
};

export const didNodesChangedPosition = (newNodes: Node[], oldNods: Node[]) => {
	let areNodesMoved = false;
	oldNods.forEach((oldNode) => {
		const newNode = newNodes.find((node) => node.id === oldNode.id);
		console.log('newNode', newNode);
		console.log('oldNode', oldNode);

		areNodesMoved = !(newNode && newNode.position.x === oldNode.position.x && newNode.position.y === oldNode.position.y);
	});
	console.log('areNodesMoved', areNodesMoved);
	return areNodesMoved;
};
