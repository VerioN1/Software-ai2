import { Input, InputProps } from '@nextui-org/react';

const TextInput = ({ ...props }: InputProps) => <Input variant="underlined" color="primary" {...props} />;

export default TextInput;
