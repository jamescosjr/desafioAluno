import express from 'express'

import { Router, Request, Response } from 'express';

const app = express();

const route = Router()

app.use(express.json())

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

route.get('/', (req: Request, res: Response) => {
    res.json(alunos)
  })

  route.post('/', (req: Request, res: Response) => {
    const { nome, idade, matricula } = req.body;
    const aluno = new Aluno(nome, idade, matricula);
    alunos.push(aluno);
    res.status(201).json(aluno);
  })

  app.use(route)

app.listen(3333, () => {
    console.log('server running on port 3333');
})