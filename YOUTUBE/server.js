import express from 'express';
import dotenv from 'dotenv';
import fileUpload from "express-fileupload"
import bodyparser from "body-parser"


import { connectDB } from './config/db.config.js';
import router from './routes/user.routes.js';

dotenv.config();

const app = express();

connectDB();            


app.use(bodyparser.json())

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp/"
}))


app.use("/api/v1/user", router)

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
