import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { flowCoordinatesSubject } from '~/features/FlowGrid/model';
import { GRID_EVENTS_REQUESTS_TYPES, GRID_EVENTS_RESPONSE_TYPES } from '~/consts';
import { rightClickMenuOptionType, RIGHT_CLICK_MENU_EVENT } from '~/components/RightClickMenu/model';
import invariant from 'tiny-invariant';
import { gridEventsResponseTypes } from '~/utils/gridUtils/gridUtils';

type Props = {
	children: ReactNode;
	nodeId: string;
};

const RightClickMenu = ({children, nodeId}: Props) => {
	const [context, setContext] = useState(false);
	const [xYPosition, setXyPosition] = useState({x: 10, y: 10});

	const showNav = async (event: any) => {
		// event.preventDefault();
		// event.stopPropagation();
		// flowCoordinatesSubject.next({eventType: GRID_EVENTS_REQUESTS_TYPES.CALCULATE_COORDINATES_REQ, params: {event, currentNodeId: nodeId}});
	};
	const hideContext = () => {
		setContext(false);
	};
	const openMenu = (chosen: RIGHT_CLICK_MENU_EVENT) => (e: any) => {
		e.preventDefault();
		e.stopPropagation();
		setContext(false);
		invariant(!(chosen in RIGHT_CLICK_MENU_EVENT), 'chosen is not in RIGHT_CLICK_MENU_EVENT');
		rightClickMenuOptionType[chosen]({nodeId});
	};

	useEffect(() => {
		const sub = flowCoordinatesSubject.subscribe(({
			eventType, data
		}: { eventType: GRID_EVENTS_RESPONSE_TYPES, data: { currentNodeId: string, [key:string]: unknown } }) => {
			if (eventType in GRID_EVENTS_RESPONSE_TYPES && nodeId == data.currentNodeId) {
				gridEventsResponseTypes[eventType](data)({setXyPosition, setContext});
			}
		});
		return () => sub.unsubscribe();
	}, [nodeId]);


	return (
		<>
			<div
				// style={{position: 'relative'}}
				className="h-full w-full flex items-center justify-center"
				onContextMenu={showNav}
				onClick={hideContext}
			>
				{children}
				{context && (
					<div
						onMouseLeave={hideContext}
						style={{top: 50, left: 50, position: 'absolute', zIndex: 1000}}
						className="rightClick"
					>
						<div className="menuElement" onClick={openMenu(RIGHT_CLICK_MENU_EVENT.DELETE_NODE)}>
							Remove Node
						</div>
						{/*<div className="menuElement" onClick={() => initMenu()}>*/}
						{/*	Copy*/}
						{/*</div>*/}
						<div className="menuElement" onClick={openMenu(RIGHT_CLICK_MENU_EVENT.DELETE_NODE)}>
							Return to Editor
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default RightClickMenu;
