import { InputProps } from '@nextui-org/react';
import React, { forwardRef } from 'react';
import { TextInput } from '~/lib';
import { SearchIcon } from '~/styles';

interface Props extends InputProps {}

const SearchInput = forwardRef((props: Props, ref: React.Ref<HTMLInputElement>) => (
	<TextInput
		ref={ref}
		classNames={{
			base: 'max-w-full sm:max-w-[10rem] h-10',
			mainWrapper: 'h-full',
			input: 'text-small',
			inputWrapper: 'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20'
		}}
		placeholder="Type to search..."
		size="sm"
		startContent={<SearchIcon size={18} />}
		type="search"
		{...props}
	/>
));

SearchInput.displayName = 'SearchInput';

export default SearchInput;
