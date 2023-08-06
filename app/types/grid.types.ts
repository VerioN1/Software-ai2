import type { Edge } from 'reactflow';

export type Position = {
	x: Number;
	y: Number;
}

export type NodeData = {
	label: string;
	description?: string;
};

export type Node = {
	id : string;
	data: NodeData;
	type: string;
	position: Position;
	updatedAt?: string;
}

export type EdgeData = {
	id : string;
	source: string;
	target: string;
	animated: boolean;
}

export type Topology = {
	id?: string;
	nodes: Node[]
	edges: Edge[]
}
