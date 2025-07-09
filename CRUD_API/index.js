import express from "express";
const app = express();
const port = 3000;
import connectDB from './db/connectDb.js';
const DATABASE_URL = "mongodb+srv://irfan-yt:7rIAVolI2FBQa8S@crudcluster.70ldwsv.mongodb.net/crud?retryWrites=true&w=majority";

// database connection
connectDB(DATABASE_URL);

// route Setup
app.get("/", (req, res) => {
  res.send("get all Details and satisfication");
});

app.listen(port, () => {
  console.log(`Server runnning at port: ${port}`);
});
