import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 3456;

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
// app.options('*', cors()); // Not needed

app.get('/', async (_, response) => {
  try {
    response.send('Hello world');
  } catch (error) {
    response.status(500).json(error);
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}`);
});
