import express from "express";
import bcrypt from "bcrypt"
import mongoose from "mongoose";
import jwt from "jsonwebtoken"


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
        res.status(500).json({ error: "Somthing went wrong", message: error.message })
    }
})

router.post("/login", async (req, res) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email })
        if (!existingUser) {
            return res.status(404).json({ message: "User not Found 😒" })
        }

        // Now compairing Password
        const inValid = await bcrypt.compare(req.body.password, existingUser.password)

        if (!inValid) {
            return res.status(404).json({ message: "Invalid credentials" })
        }

        const token = jwt.sign({
            _id: existingUser._id,
            channelName: existingUser.channelName,
            email: existingUser.email,
            phone: existingUser.phone,
            logoId: existingUser.logoId,
        }, process.env.JWT_TOKEN, { expiresIn: "10d" })


        res.status(200).json({
            _id: existingUser._id,
            channelName: existingUser.channelName,
            email: existingUser.email,
            phone: existingUser.phone,
            logoId: existingUser.logoId,
            logoUrl: existingUser.logoUrl,
            token: token,
            subscribers: existingUser.subscribers,
            subscribedChannels: existingUser.subscribedChannels
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Somthing went wrong", message: error.message })
    }
})

export default router