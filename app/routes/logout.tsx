import type { ActionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';

import { logout } from '~/services/user.service';

export const action = async ({ request }: ActionArgs) => logout(request);

export const loader = async () => redirect('/');
