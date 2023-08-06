import { flowCoordinatesSubject } from '~/features/FlowGrid/model';
import { GRID_EVENTS_REQUESTS_TYPES } from '~/consts';

export enum RIGHT_CLICK_MENU_EVENT {
	DELETE_NODE = 'delete',

}

export const rightClickMenuOptionType = {
	[RIGHT_CLICK_MENU_EVENT.DELETE_NODE]: ({nodeId}: { nodeId: string }) => {
		flowCoordinatesSubject.next({eventType: GRID_EVENTS_REQUESTS_TYPES.DELETE_NODE_REQ, params: {nodeId}});
	}
};
