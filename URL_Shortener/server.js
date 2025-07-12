import express from 'express'
import mongoose from 'mongoose'

const app = express()

// MongoDB connection
mongoose.connect(
    "mongodb+srv://irfanUrl:kDNCPULyaMMavsja@urlcluster.p9ejuu3.mongodb.net/",
    { dbName: "urlShortner" }
)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err))


const port = 1000

app.listen(port, () => {
    console.log(`Server Running on Port : ${port}`);
})

app.get("/", (req, res) => {
    res.send("Server is working and MongoDB is connected!");
});

