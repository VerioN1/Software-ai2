import type { ActionArgs } from '@remix-run/node';
import { Node } from 'reactflow';
import invariant from 'tiny-invariant';
import { topologyService } from '~/services';
import userService from '~/services/user.service';

export const action = async ({ request }: ActionArgs) => {
	try {
		const data = await request.formData();
		const { email: userId } = await userService.requireUser(request);
		const rawNodes = data.get('nodes') as string;
		invariant(rawNodes, 'nodes are required');
		const operation = data.get('operation') as string;
		invariant(operation, 'operation is required');

		switch (operation.toLowerCase()) {
			case 'create':
			case 'update': {
				const nodes = JSON.parse(rawNodes) as Node[];
				await topologyService.updateTopologyNodes(userId, nodes);
				break;
			}

			case 'delete': // do stuff
			default:
		}

		return { message: 'success' };
	} catch (e) {
		console.log(e);
		return { message: 'error' };
	}
};
