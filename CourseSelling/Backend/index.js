import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import courseRoute from "../Backend/routes/course.route.js"

const app = express()
dotenv.config()

// middleWare
app.use(express.json()) // parsing here our json data jo hame bhej rahe hai

const port = process.env.PORT || 3001
const db_Uri = process.env.MONGODB_URI

// use try catch bcz we conneting the database server and if chances to give some errors thats why we use try catch for handling the error.
try {
    await mongoose.connect(db_Uri)
    console.log("Connection successfully 😸");
} catch (error) {
    console.log(error);

}

// dinfining routes
app.use("/api/v1/course", courseRoute)

app.listen(port, () => {
    console.log(`Server is runing on port : ${port}`);
}) 