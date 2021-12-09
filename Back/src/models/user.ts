import { Document, Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema: Schema = new Schema<IUser>({
  nome: { type: String,required: true},
  email: {type: String,unique: true,required: true,lowercase: true,},
  senha: {type: String,required: true,select: false,},
  dataNascimento: {type: Date,required: true,},
},
{
  timestamps:true
});

userSchema.pre('save', async function(next){
  const hash = await bcrypt.hash(this.senha, 2);
  this.senha = hash;
  next();
});

interface IUser extends Document {
	nome: string;
	email: string;
	senha: string;
	dataNascimento: Date;
}

export default model<IUser>('User', userSchema);
