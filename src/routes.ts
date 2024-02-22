import express from 'express';
import { alunosRouter } from './alunos';

const router = express.Router();

router.use('/alunos', alunosRouter);

export default router;