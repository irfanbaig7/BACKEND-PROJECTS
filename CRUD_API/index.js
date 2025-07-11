import express from "express";
const app = express();
const port = 3000;
import connectDB from './db/connectDb.js';
const DATABASE_URL = "mongodb+srv://irfan-yt:7rIAVolI2FBQa8Sq@crudcluster.70ldwsv.mongodb.net/crud?retryWrites=true&w=majority";
import route from "./routes/route.js";

// database connection
connectDB(DATABASE_URL);

// api
app.use(express.json())

// route
app.use("/", route)


app.listen(port, () => {
  console.log(`Server runnning at port: ${port}`);
});
