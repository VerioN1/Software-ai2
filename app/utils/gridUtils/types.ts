import type { ReactFlowInstance, ReactFlowRefType } from 'reactflow';

export type GridParams = {
	reactFlowWrapper: ReactFlowRefType;
	reactFlowInstance: ReactFlowInstance;
};

export type CalculateGridClickCoordinatesParams = {
	position: { x: number; y: number };
	event: MouseEvent;
	currentNodeId: string;
};
