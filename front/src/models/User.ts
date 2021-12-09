
export default class User{
  nome!:string
  email!:string
  senha!:string
  dataNascimento!: Date

  constructor(model?:User){
    if(!model) return;
    this.nome = model.nome
    this.email = model.email
    this.senha = model.senha
    this.dataNascimento = model.dataNascimento

  }
}