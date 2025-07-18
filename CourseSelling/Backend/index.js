import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import courseRoute from "../Backend/routes/course.route.js"
import fileupload from "express-fileupload"
import { v2 as cloudinary } from "cloudinary"

const app = express()
dotenv.config()

// middleWare
app.use(express.json()) // parsing here our json data jo hame bhej rahe hai
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}))

const port = process.env.PORT || 3001
const db_Uri = process.env.MONGODB_URI

// use try catch bcz we conneting the database server and if chances to give some errors thats why we use try catch for handling the error.
try {
    await mongoose.connect(db_Uri)
    console.log("Connection successfully 😸");
} catch (error) {
    console.log(error);

}

//  Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
    api_key: process.env.CLOUDNARY_API_KEY,
    api_secret: process.env.CLOUDNARY_API_SECRET
})




// dinfining routes
app.use("/api/v1/course", courseRoute)

app.listen(port, () => {
    console.log(`Server is runing on port : ${port}`);
}) 