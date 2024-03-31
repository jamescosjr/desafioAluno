import mongoose, { Document, Schema } from 'mongoose';
import dotenv from 'dotenv';

export interface IAluno extends Document {
  nome: string;
  idade: number;
  matricula: string;
}

const alunoSchema = new Schema<IAluno>({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
  matricula: { type: String, required: true, unique: true },
});

const AlunoModel = mongoose.model<IAluno>('Aluno', alunoSchema);

export default AlunoModel;
