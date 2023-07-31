import type { User } from '@prisma/client';
import bcrypt from 'bcryptjs';

import { prisma } from '~/db.server';

export type { User } from '@prisma/client';

export async function getUserById(id: User['id']) {
	return prisma.user.findUnique({ where: { id } });
}

export async function getUserByEmail(email: User['email']) {
	return prisma.user.findUnique({ where: { email } });
}

// export async function createUser(email: User['email'], password: string) {
// 	const hashedPassword = await bcrypt.hash(password, 10);
//
// 	return prisma.user.create({
// 		data: {
// 			email,
// 			password: hashedPassword
// 		}
// 	});
// }

export async function deleteUserByEmail(email: User['email']) {
	return prisma.user.delete({ where: { email } });
}

export async function verifyLogin(email: User['email'], password: string) {
	const userWithPassword = await prisma.user.findUnique({
		where: { email }
	});

	if (!userWithPassword || !userWithPassword.password) {
		return null;
	}

	const isValid = await bcrypt.compare(password, userWithPassword.password);

	if (!isValid) {
		return null;
	}

	// eslint-disable-next-line @typescript-eslint/naming-convention
	const { password: _, ...userWithoutPassword } = userWithPassword;

	return userWithoutPassword;
}
