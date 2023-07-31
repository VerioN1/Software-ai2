import { json, redirect } from '@remix-run/node';
import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import { ClientOnly } from 'remix-utils';
import { getAllUsers } from '~/services/users.service';
import { getUserId } from '~/session.server';

const columns = [
	{ name: 'id', header: 'Id', defaultVisible: false, defaultWidth: 80 },
	{ name: 'firstName', header: 'First Name', defaultFlex: 1 },
	{ name: 'lastName', header: 'Last Name', defaultFlex: 1 },
	{ name: 'email', header: 'Email', defaultFlex: 1 },
	{
		name: 'roleId',
		header: 'Role',
		defaultFlex: 1,
		type: 'number',
		render: ({ value }: { value: number }) => (value === 1 ? 'Admin' : 'User')
	},
	{ name: 'remark', header: 'Remark', defaultFlex: 1 }
];

const gridStyle = { minHeight: 550 };

export const loader = async ({ request }: LoaderArgs) => {
	const userId = await getUserId(request);

	if (!userId) return redirect('/login');

	const users = await getAllUsers();
	return json({ users });
};
export const meta: V2_MetaFunction = () => [{ title: 'Remix Notes' }];

const Index = () => {
	// const user = useOptionalUser();
	const data = useLoaderData<typeof loader>();

	return (
		<div>
			<h1>Users</h1>
			<ClientOnly fallback="loading...">
				{() => (
					<ReactDataGrid idProperty="id" style={gridStyle} className="global-datagrid-3px-tomato-border" columns={columns} dataSource={data.users} />
				)}
			</ClientOnly>
		</div>
	);
};

export default Index;
