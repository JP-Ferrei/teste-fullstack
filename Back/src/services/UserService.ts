import { Request, Response } from 'express';
import { DocumentDefinition } from 'mongoose';

import User, { IUser } from '../models/user';

class UserService {
	async registrar(req: Request, res: Response): Promise<Response> {
		try {
			const model: DocumentDefinition<IUser> = req.body;
			console.log(model);
			const user = await User.create(model);

			return res.status(201).json({ user });
		} catch (err) {
			return res.status(400).send({ error: 'Erro ao se cadastrar' });
		}
	}

	async getUsers(req: Request, res: Response): Promise<Response> {
		try {
			const users = await User.find();
			return res.json({
				users: users,
				count: users.length,
			});
		} catch (err) {
			return res.status(400).send({ error: 'Aconteceu um erro' });
		}
	}

	async getUser(req: Request, res: Response): Promise<Response> {
		try {
			const user = await User.findById(req.params.userId).exec();
			return res.json(user);
		} catch (err) {
			return res.status(400).send({ error: 'Aconteceu um erro' });
		}
	}

	async delete(req: Request, res: Response): Promise<Response> {
		try {
			const id = req.params.userId;
			const user = await User.findByIdAndDelete(id).exec();

			return res.status(204).json(user);
		} catch (err) {
			return res.status(400).send({ error: 'Aconteceu um erro' });
		}
	}

	async put(req: Request, res: Response): Promise<Response> {
		try {
			const id = req.params.userId;
			const newUser = req.body;
			const options = { new: true };

			const user = await User.findOneAndReplace({ _id: id }, newUser, options);
			return res.json(user);
		} catch (err) {
			return res.status(400).send({ error: 'Aconteceu um erro' });
		}
	}

	async patch(req: Request, res: Response): Promise<Response> {
		try {
			const id = req.params.userId;
			const update = req.body;
			const options = { new: true };

			const user = await User.findByIdAndUpdate(id, update, options);
			return res.json(user);
		} catch (err) {
			return res.status(400).send({ error: 'Aconteceu um erro' });
		}
	}
}

export { UserService };
