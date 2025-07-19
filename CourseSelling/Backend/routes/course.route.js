import express from "express";
const router = express.Router();
import { createCourse, updateCourse, deleteCourse, getOneCourse, getallCourse } from "../controllers/course.controller.js";

router.post("/create", createCourse)

router.put("/update/:courseId", updateCourse)

router.delete("/delete/:courseId", deleteCourse)

router.get("/getall", getallCourse)

router.get("/:courseId", getOneCourse)


export default router