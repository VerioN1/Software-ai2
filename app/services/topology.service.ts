import type { Edge, Node } from 'reactflow';
import { prisma } from '~/db.server';

const getTopologyNodes = async (topologyId: string) => {
	const topo = await prisma.topology.findUnique({ where: { id: topologyId } });

	if (!topo) {
		return prisma.topology.findFirst();
	}

	return topo;
};

const createTopology = async (topology: Node[]) => {
	const isCreated = await prisma.topology.create({
		data: {
			// @ts-ignore
			nodes: topology,
			edges: []
		}
	});

	if (isCreated.id) {
		return { ...isCreated };
	}

	return null;
};

const updateTopologyNodes = async (topologyId: string, topology: Node[]) => {
	const isUpdated = await prisma.topology.update({
		where: { id: topologyId },
		data: {
			// @ts-ignore
			nodes: topology
		}
	});

	if (isUpdated.id) {
		return { ...isUpdated };
	}

	return null;
};

const updateTopologyEdges = async (topologyId: string, topology: Edge[]) => {
	const isUpdated = await prisma.topology.update({
		where: { id: topologyId },
		data: {
			// @ts-ignore
			edges: topology
		}
	});

	if (isUpdated.id) {
		return { ...isUpdated };
	}

	return null;
};

export default {
	getTopologyNodes,
	updateTopologyNodes,
	updateTopologyEdges,
	createTopology
};
