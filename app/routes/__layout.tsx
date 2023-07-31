import { Outlet } from '@remix-run/react';
import React from 'react';
import Layout from '~/layout/Layout';

const _Layout = () => (
	<Layout>
		<Outlet />
	</Layout>
);

export default _Layout;
