
export default class User{
  id!: string
  nome!:string
  email!:string
  dataNascimento!: Date

  constructor(model?:User){
    if(!model) return;
    this.id= model.id
    this.nome = model.nome
    this.email = model.email
    this.dataNascimento = model.dataNascimento
    
  }
}