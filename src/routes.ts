import express from 'express';
import { AlunoService } from './alunoService';

const router = express.Router();

router.get('/alunos', async (req, res) => {
  const alunos = await AlunoService.getAll(); 
  return res.json(alunos);
});

router.get('/alunos/:matricula', async (req, res) => {
    const aluno = await AlunoService.getByMatricula(req.params.matricula);
    if (aluno) {
        res.json(aluno);
    } else {
        res.status(404).json({ error: 'Aluno não encontrado' });
    }
});

router.post('/alunos', async (req, res) => {
    try {
      console.info (req.body)
        const aluno = await AlunoService.insert(req.body);
        res.status(201).json(aluno);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/alunos/:matricula', async (req, res) => {
    try {
        const matricula = req.params.matricula;
        const aluno = await AlunoService.update(matricula, req.body);
        if (aluno) {
            res.json(aluno);
        } else {
            res.status(404).json({ error: 'Aluno não encontrado para atualização' });
        }
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/alunos/:matricula', async (req, res) => {
    try {
        const matricula = req.params.matricula;
        const aluno = await AlunoService.delete(matricula);
        if (aluno) {
            res.status(200).json({ message: 'Aluno deletado com sucesso' });
        } else {
            res.status(404).json({ error: 'Aluno não encontrado para deleção' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default router;