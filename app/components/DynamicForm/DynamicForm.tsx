import { Input } from '@nextui-org/react';
import React from 'react';
import { CatalogDynamicField, IDynamicForm } from '~/types';

type Props = IDynamicForm;

const Field = ({ ...field }: CatalogDynamicField) => (
	<div className="flex flex-col gap-3" key={field.name}>
		<Input {...field} className="border border-gray-300 rounded-md" />
	</div>
	);

const DynamicForm = ({ fields }: Props) => (
	<form className="w-full flex flex-col gap-4 mt-5">
		{fields.map((field) => (<Field {...field} />))}
	</form>
	);

export default DynamicForm;
