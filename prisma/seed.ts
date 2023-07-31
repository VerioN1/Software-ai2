import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function seed() {
	const hashedPassword = await bcrypt.hash('helpIneed2023', 10);

	const rolesExist = await prisma.role.count();
	if (!rolesExist) {
		await prisma.role.createMany({
			data: [
				{
					name: 'ADMIN'
				},
				{
					name: 'USER'
				},
				{
					name: 'CUSTOMER'
				}
			]
		});
	}

	const isUserExist = await prisma.user.count();
	if (!isUserExist) {
		await prisma.user.create({
			data: {
				firstName: 'ADMIN',
				lastName: 'Stms',
				email: 'stms@varcode.com',
				password: hashedPassword,
				roleId: 1
			}
		});
	}

	const doesMockUsersExist = await prisma.user.count({ where: { email: 'DevinLGarr@armyspy.com' } });
	if (!doesMockUsersExist) {
		await prisma.user.createMany({
			data: [
				{
					firstName: 'Devin',
					lastName: 'Garr',
					email: 'DevinLGarr@armyspy.com',
					password: hashedPassword,
					roleId: 2
				},
				{
					firstName: 'Morris',
					lastName: 'Leal',
					email: 'MorrisSLeal@rhyta.com',
					password: hashedPassword,
					roleId: 2
				},
				{
					firstName: 'Gertrude',
					lastName: 'Cheeks',
					email: 'GraceRCheeks@rhyta.com',
					password: hashedPassword,
					roleId: 3
				}
			]
		});
	}

	console.log('Database has been seeded. 🌱');
}

seed()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
