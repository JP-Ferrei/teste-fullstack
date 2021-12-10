
export default class UserDTO{
  id!: string
  nome!:string
  email!:string
  senha!:string
  senhaConf!:string
  dataNascimento!: string

  constructor(model?:UserDTO){
    if(!model) return;
    this.id= model.id
    this.nome = model.nome
    this.email = model.email
    this.senha = model.senha
    this.senhaConf = model.senhaConf
    this.dataNascimento = model.dataNascimento
    
  }
}