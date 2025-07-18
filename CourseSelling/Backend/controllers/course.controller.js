import { Course } from "../models/course.model.js"

export const createCourse = async (req, res) => {

    const { title, description, price, coverimage } = req.body

    try {
        // if (!title || !description || !price || !coverimage) {
        //     return res.status(400).json({errors: "All feild required or Correct"})
        // }
        const data = {
            title,
            description,
            price,
            coverimage
        }
        const course = await Course.create(data)
        res.json({
            message: "created course 🤩",
            course
        })        
    } catch (error) {
        console.log(error, "error in course controller"); 
        res.status(500).json({error: "Error Creating vai course"})
    }


} 