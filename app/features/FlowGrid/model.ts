import type { Edge, Node } from 'reactflow';
import { debounceTime, map, Subject } from 'rxjs';

const prepareNodesOnChangeForServer = (nodes: Node[]) => {
	const nodesId: string[] = [];
	return nodes
		.map((node) => {
			const { id, type, position, data } = node;
			return { id, type, position, data };
		})
		.filter((node) => (nodesId.includes(node.id) ? false : nodesId.push(node.id)));
};

const prepareEdgesOnChangeForServer = (edges: Edge[]) => {
	const edgesIds: string[] = [];
	return edges
		.map((edge) => {
			const { id, source, target } = edge;
			return { id, source, target, animated: true };
		})
		.filter((edge) => (edgesIds.includes(edge.id) ? false : edgesIds.push(edge.id)));
};

export const nodesSubject = new Subject<Node[]>();

export const nodesObserver = nodesSubject.pipe(map(prepareNodesOnChangeForServer), debounceTime(2500));

export const edgesSubject = new Subject<Edge[]>();

export const edgeObserver = edgesSubject.pipe(map(prepareEdgesOnChangeForServer), debounceTime(2500));

export const flowCoordinatesSubject = new Subject<any>();
