import { createCookieSessionStorage, redirect } from '@remix-run/node';
import bcrypt from 'bcryptjs';
import invariant from 'tiny-invariant';
import type { CreateUserParams, User } from '~/types/user.type';
import { prisma } from '~/db.server';

invariant(process.env.SESSION_SECRET, 'SESSION_SECRET must be set');

export async function getUserById(id: User['id']) {
	return prisma.user.findUnique({ where: { id } });
}

export const sessionStorage = createCookieSessionStorage({
	cookie: {
		name: '__session',
		httpOnly: true,
		path: '/',
		sameSite: 'lax',
		secrets: [process.env.SESSION_SECRET],
		secure: process.env.NODE_ENV === 'production'
	}
});

export async function getSession(request: Request) {
	const cookie = request.headers.get('Cookie');
	return sessionStorage.getSession(cookie);
}

export async function logout(request: Request) {
	const session = await getSession(request);
	return redirect('/', {
		headers: {
			'Set-Cookie': await sessionStorage.destroySession(session)
		}
	});
}

const USER_SESSION_KEY = 'userId';

export async function getUserId(request: Request): Promise<User['id'] | undefined> {
	const session = await getSession(request);
	const userId = session.get(USER_SESSION_KEY);
	return userId;
}

export async function getUser(request: Request) {
	const userId = await getUserId(request);

	if (userId === undefined) return null;

	const user = await getUserById(userId);

	if (user) return user;

	throw await logout(request);
}

export async function requireUserId(request: Request, redirectTo: string = new URL(request.url).pathname) {
	const userId = await getUserId(request);

	if (!userId) {
		const searchParams = new URLSearchParams([['redirectTo', redirectTo]]);
		throw redirect(`/login?${searchParams}`);
	}

	return userId;
}

export async function createUserSession({
	request,
	userId,
	remember,
	redirectTo
}: {
	request: Request;
	userId: string;
	remember: boolean;
	redirectTo: string;
}) {
	const session = await getSession(request);
	session.set(USER_SESSION_KEY, userId);
	return redirect(redirectTo, {
		headers: {
			'Set-Cookie': await sessionStorage.commitSession(session, {
				maxAge: remember
					? 60 * 60 * 24 * 7 // 7 days
					: undefined
			})
		}
	});
}

const createUserInDb = async (userDetails: CreateUserParams) => {
	const createdUser = await prisma.user.create({
		data: {
			password: await bcrypt.hash(userDetails.password, 10),
			email: userDetails.email,
			role: 'ADMIN',
			organization: userDetails.organization,
			fullName: userDetails.fullName
		}
	});

	return createdUser;
};

const verifyLogin = async (email: string, password: string) => {
	try {
		const userWithPassword = await prisma.user.findFirstOrThrow({
			where: { email }
		});

		if (!userWithPassword || !userWithPassword.password) {
			return null;
		}

		const isValid = await bcrypt.compare(password, userWithPassword.password);

		if (isValid) {
			return null;
		}

		// eslint-disable-next-line @typescript-eslint/naming-convention
		const { password: _, ...userWithoutPassword } = userWithPassword;

		return userWithoutPassword;
	} catch (error) {
		await prisma.user.create({
			data: {
				password: await bcrypt.hash(password, 10),
				email,
				role: 'ADMIN',
				fullName: 'alon barel',
				organization: 'test'
			}
		});
	}
};

const requireUser = async (request: Request): Promise<User> => {
	const user = await getUser(request);

	if (!user) {
		throw redirect('/login');
	}

	return user;
};

export default {
	logout,
	getUser,
	createUserInDb,
	createUserSession,
	requireUser,
	verifyLogin
};
