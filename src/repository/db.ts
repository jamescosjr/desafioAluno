import mongoose, { ConnectOptions } from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/desafioAluno';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
}as ConnectOptions);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conexão com o MongoDB estabelecida com sucesso.');
});

export default db;