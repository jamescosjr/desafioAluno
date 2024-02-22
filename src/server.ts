import express from 'express'

import { alunosRouter } from './alunos';

const app = express();

app.use(express.json())

app.use('/alunos', alunosRouter)

app.listen(3333, () => {
    console.log('server running on port 3333');
})