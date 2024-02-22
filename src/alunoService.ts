import Aluno from "./aluno";

const alunos: Aluno[] = [];

const AlunoService = {
    getAll: (): Aluno[] => alunos,
    getByMatricula: (matricula: string): Aluno | undefined => alunos.find(aluno => aluno.matricula === matricula),
    insert: (aluno: Aluno): Aluno => {
        if (alunos.some(a => a.matricula === aluno.matricula)){
            throw new Error('Já existe um aluno com esta matrícula.');
        }
        alunos.push(aluno);
        return aluno;
    }
}

export default AlunoService;