import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('A variável de ambiente MONGODB_URI não está definida.');
}

console.log('Variável de ambiente MONGODB_URI:', MONGODB_URI);

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Conexão com o MongoDB estabelecida com sucesso.'))
  .catch(error => console.error('Erro na conexão com o MongoDB:', error));

const db = mongoose.connection;

export default db;