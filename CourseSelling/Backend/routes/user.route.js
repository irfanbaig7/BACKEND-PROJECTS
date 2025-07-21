import express from "express";
const router = express. Router()
import { signupUser } from "../controllers/user.controller.js";

router.post("/signup", signupUser)

export default router