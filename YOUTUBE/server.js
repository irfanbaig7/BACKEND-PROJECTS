import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.config.js';

dotenv.config();

const app = express();

connectDB();            

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
