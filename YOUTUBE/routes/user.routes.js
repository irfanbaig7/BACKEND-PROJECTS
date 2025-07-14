import express from "express";
const router = express.Router();

router.post("/signup", (req, res) => {
    res.send("All good😊 chal gaya Oyee")
})

export default router