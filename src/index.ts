import express from 'express';
import Routes from './routes';

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/template`));
app.use(Routes);

app.listen(3333, () => {
  console.log('👽 server started');
});
