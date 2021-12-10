import User from '@/models/User';
import axios from 'axios';

export default class UserService {
	url: string = 'http://localhost:3333/user';

	public getUsers(): Promise<any> {
		return axios.get(this.url);
	}

	public deleteUser(id: string): Promise<void> {
		return axios.delete(`${this.url}/${id}`);
	}

	public patchUser(id: string, user: User) {
		return axios.patch(`${this.url}/${id}`, user);
	}

	public putUser(id: string, user: User) {
		return axios.put(`${this.url}/${id}`, user);
	}

	public getUser(id: string) {
		return axios.get(`${this.url}/${id}`);
	}

	public postUser(user: User) {
		return axios.post(`${this.url}`, user);
	}
}
