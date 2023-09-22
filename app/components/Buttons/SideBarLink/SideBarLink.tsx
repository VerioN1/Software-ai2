import { NavLink as RemixLink } from '@remix-run/react/dist/components';
import React from 'react';

interface Props {
	to: string;
	prefetch?: 'intent' | 'none' | 'render' | 'viewport';
	children: React.ReactNode;
	className?: string;
}

const SideBarLink = ({ to, children, prefetch = 'none', className }: Props) => {
	const classNames = ({ isActive, isPending }: { isActive: boolean; isPending: boolean }) => {
		const activeStyle = isActive ? '!text-zinc-100 bg-primary shadow-md shadow-secondary-300' : '';
		const pendingStyle = isPending ? 'text-zinc-100 bg-primary animate-pulse' : '';
		return `flex place-items-center p-2 text-zinc-400 border-solid rounded-lg border-transparent hover:bg-primary hover:!text-zinc-100 ${pendingStyle} ${activeStyle} ${className}`;
	};

	return (
		<RemixLink prefetch={prefetch} to={to} className={classNames}>
			{children}
		</RemixLink>
	);
};

export default SideBarLink;
