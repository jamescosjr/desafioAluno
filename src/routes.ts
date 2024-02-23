import express from 'express';
import AlunoService from './alunoService';

const router = express.Router();

router.get('/alunos', (req, res) => {
    res.json(AlunoService.getAll())
  })

  router.get('/alunos/:matricula', (req, res) => {
    const aluno = AlunoService.getByMatricula(req.params.matricula);
    if(aluno){
        res.json(aluno);
    }else {
        res.status(404).json({ error: 'Aluno não encontrado' })
    }
  });

  router.post('/alunos', (req, res) => {
    try{
        const aluno = AlunoService.insert(req.body);
        res.status(201).json(aluno);
    } catch (error: any){
        res.status(400).json({ error: error.message });
    }
  });

export default router;