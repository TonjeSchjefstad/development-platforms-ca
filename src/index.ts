import express from 'express';
import cors from 'cors';
import dotenv from "dotenv"
import { pool } from './database.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello Noroff!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});