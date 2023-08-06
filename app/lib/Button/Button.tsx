import { Button as NButton, ButtonProps } from '@nextui-org/react';

const Button = ({ children, ...props }: ButtonProps) => (
	<NButton color="primary" variant="shadow" {...props}>
		{children}
	</NButton>
);

Button.displayName = 'softwareAI/Button';
export default Button;
