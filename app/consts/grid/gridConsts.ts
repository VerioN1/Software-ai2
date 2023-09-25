import DbServerNode from '~/entities/FlowNodes/DbServerNode';
import BackendServerNode from '~/entities/FlowNodes/BackendServerNode';
import ClientServerNode from '~/entities/FlowNodes/ClientServerNode';

export enum GRID_NODES {
	NODE_SERVER = 'backend-server',
	NODE_CLIENT = 'client-server',
	DB_SERVER = 'database'
}

export const GRID_NODE_TYPES = {
	[GRID_NODES.DB_SERVER]: DbServerNode,
	[GRID_NODES.NODE_SERVER]: BackendServerNode,
	[GRID_NODES.NODE_CLIENT]: ClientServerNode
};

export enum GRID_ENTITY_TYPES {
	NODE = 'nodes',
	EDGE = 'edges'
}

export enum GRID_EVENTS_REQUESTS_TYPES {
	CALCULATE_COORDINATES_REQ = 'CALCULATE_COORDINATES_REQ',
	DELETE_NODE_REQ = 'DELETE_NODE_REQ'
}

export enum GRID_EVENTS_RESPONSE_TYPES {
	CALCULATE_COORDINATES_RES = 'CALCULATE_COORDINATES_RES'
}
