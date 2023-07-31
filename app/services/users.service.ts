import { prisma } from '~/db.server';

const usersRef = prisma.user;

export const getAllUsers = async () =>
	usersRef.findMany().then((users) =>
		users.map((user) => {
			const { password: _, ...userWithoutPassword } = user;
			return userWithoutPassword;
		})
	);
