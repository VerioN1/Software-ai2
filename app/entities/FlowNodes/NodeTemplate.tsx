import { Link } from '@remix-run/react';
import type { ReactNode } from 'react';
import React from 'react';
import type { NodeProps } from 'reactflow';
import { Handle, Position } from 'reactflow';
import { RightClickMenu } from '~/components';
import { SIDEBAR_ROUTES } from '~/consts';

interface Props {
	children: ReactNode;
	linkProps?: any;
	nodeProps: NodeProps;
}

const NodeTemplate = ({ linkProps = {}, children, nodeProps }: Props) => (
	<>
		<Handle type="target" position={Position.Top} />
		<Link
			className="h-full w-full flex items-center justify-center"
			style={{ color: 'inherit' }}
			to={`/${SIDEBAR_ROUTES.graphs}/${nodeProps.data.label}`}
			{...linkProps}
		>
			<RightClickMenu nodeId={nodeProps?.id}>{children}</RightClickMenu>
		</Link>
		<Handle type="source" position={Position.Bottom} id="a" />
	</>
);

export default NodeTemplate;
