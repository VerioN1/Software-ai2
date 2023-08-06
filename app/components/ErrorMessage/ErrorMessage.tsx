import type { PropsWithChildren } from 'react';
import React from 'react';
import { BiError } from 'react-icons/bi';
import { Text } from '~/lib';

interface Props
	extends PropsWithChildren<{
		message?: string;
		title?: string;
	}> {}

const ErrorMessage = ({ message, title }: Props) => (
	<div className="h-full w-full flex justify-center items-center">
		<BiError size={64} color="red" />
		<Text size="3xl">{title || 404}</Text>
		{message && <Text>{message}</Text>}
	</div>
);

export default ErrorMessage;
