import express from "express";
const router = express.Router();
import { createCourse, updateCourse, deleteCourse  } from "../controllers/course.controller.js";

router.post("/create", createCourse)

router.put("/update/:courseId", updateCourse) 

router.delete("/delete/:courseId", deleteCourse) 

export default router