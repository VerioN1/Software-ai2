// import type NodeVault from 'node-vault';
// import initVault from 'node-vault';
// import bcrypt from 'bcrypt';
// import { prisma } from '~/utils/prisma.server';
//
// const vault = initVault({
// 	apiVersion: 'v1',
// 	endpoint: 'http://localhost:8200'
// });
//
// const role_id = process.env.ROLE_ID;
// const secret_id = process.env.SECRET_ID;
//
// const connect = async () => {
// 	try {
// 		const stastus = await vault.status();
// 		if (stastus.sealed) {
// 			await vault.unseal({
// 				secret_shares: 1,
// 				key: 'tinSFXbyGUMHVWfxMqitx09o0iLTVaLKZdcEmzNHPkaS'
// 			});
// 			await vault.unseal({
// 				secret_shares: 1,
// 				key: 'YYV2YMCuUEQXjd5wsgM2TQMGak+HGhDbP8YMKvSS2bJ4'
// 			});
// 			await vault.unseal({
// 				secret_shares: 1,
// 				key: 'YE9Drq2Uc3q7G3zx7L5TVpQhANkylmuNWAt3UnhmSMx1'
// 			});
// 		}
// 	} catch (e) {
// 		console.log(e);
// 	}
// 	const result = await vault.approleLogin({
// 		role_id,
// 		secret_id
// 	});
// 	vault.token = result.auth.client_token; // Add token to vault object for subsequent requests.
// 	return vault;
// };
//
// type FuncToRunWithVault = (vault: NodeVault.client) => Promise<any>;
//
// const runOnVault = async (funcToRunWithVault: FuncToRunWithVault) => {
// 	const authVault = await connect();
// 	try {
// 		return await funcToRunWithVault(authVault);
// 	} catch (e) {
// 		console.log(e);
// 	}
// 	return null;
// };
//
// const login = async (username: string, password: string) => {
// 	return await runOnVault(async (vault) => {
// 		const {data} = await vault.read(`secret/users/${username}`);
// 		const passwordMatch = await bcrypt.compare(password, data.password);
// 		if (passwordMatch) {
// 			return data;
// 		}
// 		return null;
// 	});
// };
//
// const register = async (username: string, password: string) => {
// 	return await runOnVault(async (vault) => {
// 		const result = await prisma.user.findUnique({where: {email: username}});
// 		if (result) {
// 			return null;
// 		}
// 		const passwordHash = await bcrypt.hash(password, 10);
// 		await vault.delete(`secret/users/${username}`);
// 		await vault.write(`secret/users/${username}`, {
// 			username,
// 			password: passwordHash
// 		});
// 		return 'success';
// 	});
// };
//
// export default {
// 	runOnVault,
// 	login,
// 	register,
// 	vault
// };
