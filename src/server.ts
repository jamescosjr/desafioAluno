
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

const aluno1 = new Aluno('James', 35, '12345')

route.get('/', (req: Request, res: Response) => {
    res.json(aluno1)
  })

  app.use(route)

app.listen(3333, () => 'server running on port 3333')