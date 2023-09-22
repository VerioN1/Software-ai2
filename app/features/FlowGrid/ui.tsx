import { useFetcher, Link } from '@remix-run/react';
import React, { DragEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import type { Connection, Edge, Node, ReactFlowInstance, ReactFlowRefType } from 'reactflow';
import ReactFlow, { addEdge, Background, Controls, MiniMap, ReactFlowProvider, useEdgesState, useNodesState } from 'reactflow';
import { ButtonGroup } from '@nextui-org/react';
import { Button } from '~/lib';
import { PencilIcon, Plus } from '~/styles';
import { NOOP } from '~/utils';
import { CalculateGridClickCoordinatesParams } from '~/utils/gridUtils/types';
import { flowCoordinatesSubject } from './model';
import { GRID_ENTITY_TYPES, GRID_NODE_TYPES, GRID_EVENTS_REQUESTS_TYPES, GRID_NODES } from '~/consts';
import { useUpdateGrid } from '../../hooks';
import { gridMock } from '../../../mock';
import { gridEventsRequestsTypes } from '~/utils/gridUtils/gridUtils';
import { isFalsy } from '~/utils/commonUtils';

interface Props {
	initialNodes?: Node[];
	initialEdges?: Edge[];
	openDrawer?: () => void;
}

const FlowGrid = ({ initialNodes = gridMock.defaultNodes, initialEdges = gridMock.defaultEdges, openDrawer = NOOP }: Props) => {
	const reactFlowWrapper = useRef<ReactFlowRefType>(null);
	const fetcher = useFetcher();
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
	const [reactFlowInstance, setReactFlowInstance] = useState<null | ReactFlowInstance>(null);
	const subscriptionRef = useRef<null | { unsubscribe: () => void }>(null);
	const toggleEditMode = useCallback(openDrawer, [openDrawer]);

	const updateGridOnServer = useCallback(
		(entityType: GRID_ENTITY_TYPES) => (entity: Edge[] | Node[]) => {
			fetcher.submit(
				{ [entityType]: JSON.stringify(entity), operation: 'update' },
				{
					method: 'post',
					action: `/api/${entityType === GRID_ENTITY_TYPES.EDGE ? 'edges' : 'nodes'}`
				}
			);
		},
		[fetcher]
	);

	useUpdateGrid({
		nodes,
		edges,
		initialNodes,
		initialEdges,
		updateGridOnServer
	});

	useEffect(() => {
		if (subscriptionRef.current) {
			subscriptionRef.current.unsubscribe();
		}

		subscriptionRef.current = flowCoordinatesSubject.subscribe(({ eventType, params }: { eventType: GRID_EVENTS_REQUESTS_TYPES; params: CalculateGridClickCoordinatesParams }) => {
			if (!isFalsy(reactFlowWrapper.current) && !isFalsy(reactFlowInstance) && eventType in GRID_EVENTS_REQUESTS_TYPES) {
				gridEventsRequestsTypes[eventType](params)({
					reactFlowWrapper: reactFlowWrapper.current,
					reactFlowInstance
				});
			}
		});
	}, [reactFlowInstance]);

	const onConnect = useCallback((params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

	const onDragOver: DragEventHandler = useCallback((event) => {
		event.preventDefault();
		// eslint-disable-next-line no-param-reassign
		event.dataTransfer.dropEffect = 'move';
	}, []);

	const onDrop: DragEventHandler = useCallback(
		(event) => {
			event.preventDefault();

			if (reactFlowWrapper?.current && reactFlowInstance !== null) {
				const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
				const nodeData = event.dataTransfer.getData('application/reactflow');
				const { nodeType: type, nodeName: label } = JSON.parse(nodeData) as { nodeType: GRID_NODES; nodeName: string };

				// check if the dropped element is valid
				if (typeof type === 'undefined' || !type) {
					return;
				}

				const position = reactFlowInstance.project({
					x: event.clientX - reactFlowBounds.left,
					y: event.clientY - reactFlowBounds.top
				});

				const newNode = {
					id: `${label}-${type}`,
					type,
					position,
					data: { label, description: null }
				};

				setNodes((nds) => nds.concat(newNode));
			}
		},
		[reactFlowInstance, setNodes]
	);

	return (
		<ReactFlowProvider>
			<div className="reactflow-wrapper" ref={reactFlowWrapper}>
				<ReactFlow
					nodesDraggable={false}
					connectionRadius={30}
					nodes={nodes}
					style={{ position: 'relative' }}
					onNodesChange={onNodesChange}
					edges={edges}
					onEdgesChange={onEdgesChange}
					onConnect={onConnect}
					nodeTypes={GRID_NODE_TYPES}
					onNodeContextMenu={(event, node: Node) => {
						event.preventDefault();
						flowCoordinatesSubject.next({
							eventType: GRID_EVENTS_REQUESTS_TYPES.CALCULATE_COORDINATES_REQ,
							params: { position: node.position, currentNodeId: node.id, event }
						});
					}}
					onInit={(instance) => {
						setReactFlowInstance(instance);
					}}
					onDrop={onDrop}
					onDragOver={onDragOver}
					fitView
				>
					<ButtonGroup>
						{/* @ts-ignore */}
						<Button as={Link} style={{ right: '1rem', zIndex: '5', top: '10px', position: 'absolute', height: '40px' }} to="/create-monitoring">
							<Plus size={22} />
						</Button>
						<Button style={{ right: '4.5rem', zIndex: '5', top: '10px', position: 'absolute', height: '40px' }} onPress={toggleEditMode}>
							<PencilIcon size={22} />
						</Button>
					</ButtonGroup>
					<Background />
					<MiniMap />
					<Controls />
				</ReactFlow>
			</div>
		</ReactFlowProvider>
	);
};

export default FlowGrid;
