import express from 'express';
import { AlunoService } from './alunoService';

const router = express.Router();

router.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

router.get('/aluno', async (req, res) => {
  const alunos = await AlunoService.getAll(); 
  return res.json(alunos);
});

router.get('/aluno/:matricula', async (req, res) => {
    const aluno = await AlunoService.getByMatricula(req.params.matricula);
    if (aluno) {
        res.json(aluno);
    } else {
        res.status(404).json({ error: 'Aluno não encontrado' });
    }
});

router.post('/aluno', async (req, res) => {
    try {
      console.info (req.body)
        const aluno = await AlunoService.insert(req.body);
        res.status(201).json(aluno);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

export default router;