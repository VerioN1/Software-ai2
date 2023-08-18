import { NavLink as RemixLink } from '@remix-run/react/dist/components';
import React from 'react';

interface Props {
	to: string;
	prefetch?: 'intent' | 'none' | 'render' | 'viewport';
	children: React.ReactNode;
	className?: string;
}

const SideBarLink = ({ to, children, prefetch = 'none', className }: Props) => {
	const classNames = ({ isActive }: { isActive: boolean }) => {
		const hoverBorder = isActive ? 'color-secondary-500' : 'transparent';
		return `flex justify-center items-center border-solid border-transparent border-l-4 hover:border-current hover:border-secondary-500 ${hoverBorder} ${className}`;
	};

	return (
		<RemixLink prefetch={prefetch} to={to} className={classNames}>
			{children}
		</RemixLink>
	);
};

export default SideBarLink;
