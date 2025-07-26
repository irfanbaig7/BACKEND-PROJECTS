import express from "express";
const router = express. Router()
import { signupUser } from "../controllers/user.controller.js";
import { loginUser } from "../controllers/user.controller.js";

router.post("/signup", signupUser)

router.post("/login", loginUser)

export default router