import express from "express";
const router = express.Router();
import { createCourse } from "../controllers/course.controller.js";

router.post("/create", createCourse)

export default router