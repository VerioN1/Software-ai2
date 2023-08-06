import React, { forwardRef } from 'react';
import type { TextInputProps } from '@mantine/core';
import { TextInput } from '~/lib';
import { SearchIcon } from '~/styles';

interface Props extends TextInputProps {

}

const SearchInput = forwardRef((props: Props, ref) => {
	return (
		<TextInput ref={ref} label="Search" rightSection={<SearchIcon/>} {...props}/>
	);
});

SearchInput.displayName = 'SearchInput';

export default SearchInput;
