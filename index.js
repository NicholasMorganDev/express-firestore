import express from 'express';
import cors from 'cors';
import { addNewAnimal, getAllAnimals } from './src/animals.js';

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json()); //this tells express that our POSTS will be json files

app.get('/animals', getAllAnimals)

app.post('/animals', addNewAnimal)

app.listen(PORT, () => {
  console.log('Listening on http://localhost:3000');
});

