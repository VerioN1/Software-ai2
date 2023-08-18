import { json } from '@remix-run/node';
import type { ActionFunction } from '@remix-run/node';
import { Edge } from 'reactflow';
import invariant from 'tiny-invariant';
import { topologyService } from '~/services';
import userService from '~/services/user.service';

export const action: ActionFunction = async ({ request }) => {
	try {
		const data = await request.formData();
		const rawEdges = data.get('edges') as string;
		invariant(rawEdges, 'edges are required');
		const { email: userId } = await userService.requireUser(request);

		if (data.get('edges')) {
			const edges = JSON.parse(rawEdges) as Edge[];
			const isCreated = await topologyService.updateTopologyEdges(userId, edges);
			console.log(isCreated, 'isCreated');
		}

		return json({ message: 'success' });
	} catch (e) {
		console.log(e);
		return json({ message: 'error' });
	}
};
