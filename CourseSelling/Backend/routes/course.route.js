import express from "express";
const router = express.Router();
import { createCourse, updateCourse,  } from "../controllers/course.controller.js";

router.post("/create", createCourse)

router.put("/update/:courseId", updateCourse) 

export default router