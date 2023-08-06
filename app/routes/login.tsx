import { CircularProgress, Link } from '@nextui-org/react';
import type { ActionFunction, LoaderFunction, V2_MetaFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Form, useActionData, useSearchParams } from '@remix-run/react';
import { useEffect, useRef } from 'react';
import { userService } from '~/services';
import { Button, Checkbox, PasswordInput, TextInput } from '~/lib';
import { getUserId } from '~/services/user.service';
import { safeRedirect } from '~/utils';

export const loader: LoaderFunction = async ({ request }) => {
	const userId = await getUserId(request);

	if (userId) return redirect('/');

	return json({});
};

interface ActionData {
	errors?: {
		email?: string;
		password?: string;
	};
}

export const action: ActionFunction = async ({ request }) => {
	const formData = await request.formData();
	const email = formData.get('email');
	const password = formData.get('password');
	const redirectTo = safeRedirect('/', '/');
	const remember = formData.get('remember');

	if (typeof password !== 'string' || password.length === 0) {
		return json<ActionData>({ errors: { password: 'Password is required' } }, { status: 400 });
	}

	if (password.length < 2) {
		return json<ActionData>({ errors: { password: 'Password is too short' } }, { status: 400 });
	}

	if (!email || typeof email !== 'string') {
		return json<ActionData>({ errors: { email: 'Email is required' } }, { status: 400 });
	}

	const user = await userService.verifyLogin(email, password);

	if (!user) {
		return json<ActionData>({ errors: { email: 'Invalid email or password' } }, { status: 400 });
	}

	// return vault.login(email, password)
	return userService.createUserSession({
		request,
		userId: user.id,
		remember: remember === 'on',
		redirectTo
	});
};

export const meta: V2_MetaFunction = () => [{ title: 'Login' }];

const LoginPage = () => {
	const actionData = useActionData<typeof action>();
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (actionData?.errors?.email) {
			emailRef.current?.focus();
		} else if (actionData?.errors?.password) {
			passwordRef.current?.focus();
		}
	}, [actionData]);

	return (
		<div className="flex min-h-screen flex-col justify-center">
			<div className="mx-auto w-full max-w-md px-8">
				<Form method="post" className="space-y-6" noValidate>
					<div className="mt-1">
						<TextInput
							ref={emailRef}
							id="email"
							label="Email address"
							required
							name="email"
							type="email"
							autoComplete="email"
							aria-invalid={actionData?.errors?.email ? true : undefined}
							aria-describedby="email-error"
						/>
					</div>
					<PasswordInput required name="password" label="Password" error={actionData?.errors?.password} />
					<Button type="submit">Log in</Button>
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<Checkbox name="remember">Remember me</Checkbox>
						</div>
					</div>
					<CircularProgress color="primary" aria-label="Loading..." />
				</Form>
			</div>
		</div>
	);
};

export default LoginPage;
