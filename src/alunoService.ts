import AlunoModel, { IAluno } from './repository/alunoModel';

export const AlunoService = {
  getAll: async (): Promise<IAluno[]> => {
    return await AlunoModel.find();
  },
  getByMatricula: async (matricula: string): Promise<IAluno | null> => {
    return await AlunoModel.findOne({ matricula });
  },
  insert: async (alunoData: IAluno): Promise<IAluno> => {
    const aluno = new AlunoModel(alunoData);
    try {
      await aluno.save();
      return aluno;
    } catch (error: any) {
        console.log(error.message)
      throw new Error('Erro ao inserir aluno no banco de dados.');
    }
  },
  update: async (matricula: string, alunoData: Partial<IAluno>): Promise<IAluno | null> => {
    const aluno = await AlunoModel.findOneAndUpdate({ matricula }, alunoData, { new: true });
    return aluno;
  },
  delete: async (matricula: string): Promise<IAluno | null> => {
    const aluno = await AlunoModel.findOneAndDelete({ matricula });
    return aluno;
  },
};