export type { User } from '@prisma/client';
export type { Topology } from '@prisma/client';

export type CreateUserParams = {
	email: string;
	organization: string;
	fullName: string;
	password: string;
};
