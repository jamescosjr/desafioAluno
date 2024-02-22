import { Router, Request, Response } from "express";

class Aluno{
    nome: string
    idade: number
    matricula: string

    constructor(n: string, i: number, m: string){
        this.nome = n
        this.idade = i
        this.matricula = m
    }
}

const alunos: Aluno[] = [];

const alunosRouter = Router();

alunosRouter.get('/', (req: Request, res: Response) => {
    res.json(alunos)
  })

  alunosRouter.post('/', (req: Request, res: Response) => {
    const { nome, idade, matricula } = req.body;
    const aluno = new Aluno(nome, idade, matricula);
    alunos.push(aluno);
    res.status(201).json(aluno);
  })

  alunosRouter.get('/:matricula', (req: Request, res: Response) => {
    const { matricula } = req.params;
    const aluno = alunos.find(aluno => aluno.matricula === matricula);
    if(aluno){
        res.json(aluno) 
    } else {
        res.status(404).json({ error: 'Aluno nao encontrado' });
    }
  })

  export { Aluno, alunosRouter }