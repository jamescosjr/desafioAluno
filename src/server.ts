import express from 'express';
import routes from './routes';
import './repository/db';
import dotenv from 'dotenv';

dotenv.config();

const PORT =process.env.PORT;

const app = express();

app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => {
    console.log('server running on port ' + PORT);
});