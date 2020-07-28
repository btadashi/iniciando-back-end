import 'reflect-metadata'; // Importar reflect-metadata

import express from 'express';
import routes from './routes';

/**Importar a conexão. Aqui não precisamos nomear a conexão, só importar o arquivo mesmo*/
import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('🚀️ Sever started on port 3333!');
});
