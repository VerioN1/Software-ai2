import type { Edge, Node } from 'reactflow';

export const defaultNodes: Node[] = [
	{
		id: '1',
		type: 'backend-server',
		data: {label: 'Main API'},
		position: {x: 80, y: -50}
	},
	{
		id: '2',
		type: 'client-server',
		data: {label: 'CMS controller'},
		position: {x: 200, y: 100}
	},
	{
		id: '3',
		type: 'client-server',
		data: {label: 'production site'},
		position: {x: 370, y: 100}
	},
	{
		id: '5',
		type: 'dbserver',
		data: {label: 'Mongo DB', description: '<URL>'},
		position: {x: 100, y: -180}
	}
];

export const defaultEdges: Edge[] = [
	{id: 'e1-4', source: '1', target: '2', animated: true},
	{id: 'e1-3', source: '1', target: '3', animated: true},
	{id: 'e1-2', source: '5', target: '1', animated: true}
];
