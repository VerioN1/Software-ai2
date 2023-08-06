import { useEffect } from 'react';
import type { Edge, Node } from 'reactflow';
import { edgeObserver, edgesSubject, nodesObserver, nodesSubject } from '~/features/FlowGrid/model';
import { GRID_ENTITY_TYPES } from '~/consts';
import { NOOP } from '~/utils';

type Params = {
	nodes: Node[];
	edges: Edge[];
	initialNodes: Node[] | null;
	initialEdges: Edge[] | null;
	updateGridOnServer: (type: GRID_ENTITY_TYPES) => (data: Edge[] | Node[]) => void;
};

/**
 * This hook is used to update the grid when the nodes or edges are updated
 * @param nodes
 * @param edges
 * @param initialNodes
 * @param initialEdges
 * @param updateEdgesOnServer
 * @param updateGridOnServer
 */
const useUpdateGrid = ({ nodes, edges, updateGridOnServer }: Params) => {
	useEffect(() => {
		try {
			const updateNodeSubscription = nodesObserver.subscribe(updateGridOnServer(GRID_ENTITY_TYPES.NODE));
			const updateEdgeSubscription = edgeObserver.subscribe(updateGridOnServer(GRID_ENTITY_TYPES.EDGE));
			return () => {
				updateNodeSubscription.unsubscribe();
				updateEdgeSubscription.unsubscribe();
			};
		} catch (e) {
			console.warn(e);
			return () => NOOP;
		}
	}, [updateGridOnServer]);

	useEffect(() => {
		nodesSubject.next(nodes);
	}, [nodes]);

	useEffect(() => {
		edgesSubject.next(edges);
	}, [edges]);
};

export default useUpdateGrid;
