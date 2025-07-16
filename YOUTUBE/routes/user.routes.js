import express from "express";
import bcrypt from "bcrypt"
import mongoose from "mongoose";
import userModel from "../models/userSchema.js";
import cloudinary from "../config/cloudinary.js";
const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const uploadeImg = await cloudinary.uploader.upload(req.files.logoUrl.tempFilePath)

        const newUser = new userModel({
            _id: new mongoose.Types.ObjectId,
            channelName: req.body.channelName,
            phone: req.body.phone,
            email: req.body.email,
            password: hashedPassword,
            logoUrl: uploadeImg.secure_url,
            logoId: uploadeImg.public_id
        })
        let user = await newUser.save()
        res.status(201).json({
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Somthing went wrong", message : error.message})
    }
}) 

export default router