export default class User {
	_id?: string;
	nome!: string;
	email!: string;
	dataNascimento!: string;
	senha?: string;
	constructor(model?: User) {
		if (!model) return;
		this._id = model._id;
		this.nome = model.nome;
		this.email = model.email;
		this.dataNascimento = model.dataNascimento;
	}
}
