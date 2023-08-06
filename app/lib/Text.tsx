import React from 'react';

const sizes = {
	sm: 'text-sm',
	md: 'text-md',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl',
	'3xl': 'text-3xl',
	'4xl': 'text-4xl',
	'5xl': 'text-5xl',
	'6xl': 'text-6xl',
	'7xl': 'text-7xl',
	'8xl': 'text-8xl'
};

type Props = React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> & {
	size?: keyof typeof sizes;
};

// eslint-disable-next-line jsx-a11y/label-has-associated-control
const Text = ({ size = 'md', className, ...props }: Props) => (
	<label {...props} className={`${sizes[size]} ${className}`}>
		{props.children}
	</label>
);

export default Text;
