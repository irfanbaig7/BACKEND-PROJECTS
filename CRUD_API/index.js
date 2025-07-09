import express from 'express'
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("get all Details")    
})

app.listen(port, () => {
    console.log(`Server runnning at port: ${port}`);    
})









