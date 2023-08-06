import { EyeFilledIcon, EyeSlashFilledIcon } from '@nextui-org/shared-icons';
import { type InputProps } from '@nextui-org/react';
import { forwardRef, useState } from 'react';
import TextInput from '../TextInput';

const PasswordInput = forwardRef((props: InputProps, ref) => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => setIsVisible(!isVisible);

	return (
		<TextInput
			ref={ref}
			label="Password"
			endContent={
				<button className="focus:outline-none" type="button" onClick={toggleVisibility}>
					{isVisible ? (
						<EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
					) : (
						<EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
					)}
				</button>
			}
			type={isVisible ? 'text' : 'password'}
			/* eslint-disable-next-line react/jsx-props-no-spreading */
			{...props}
		/>
	);
});

export default PasswordInput;
