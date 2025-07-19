import { Course } from "../models/course.model.js"
import { v2 as cloudinary } from "cloudinary"
export const createCourse = async (req, res) => {

    const { title, description, price } = req.body

    try {

        // passing Image/files yani get req se image mangwange
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const coverimage = req.files.coverimage;

        // images format checking
        const allowFormat = ["image/png", "image/jpeg"]
        if (!allowFormat.includes(coverimage.mimetype)) {
            return res.status(400).json({ error: "Invalid file Format." });
        }

        // Cloudinary code 
        const cloud_response = await cloudinary.uploader.upload(coverimage.tempFilePath)
        if (!cloud_response || cloud_response.error) {
            return res.status(400).json({ error: "Error uploading file to cloudinary." });
        }

        const data = {
            title,
            description,
            price,
            coverimage: {
                public_id: cloud_response.public_id,
                url: cloud_response.url
            }
        }
        const course = await Course.create(data)
        res.json({
            message: "created course 🤩",
            course
        })
        console.log("creation Successfully 🔥");

    } catch (error) {
        console.log(error, "error in course controller");
        res.status(500).json({ error: "Error! Creating vai course or unfeild some" })
    }


}

export const updateCourse = async (req, res) => {

    const { courseId } = req.params;
    const { title, description, price, coverimage } = req.body

    try {
        const course = await Course.updateOne({ _id: courseId }, {
            title, description, price, coverimage: {
                public_id: coverimage?.public_id,
                url: coverimage?.url
            }

        })
        res.status(201).json({ message: "Course updated Successfully" })
        console.log("Update the Course");
    } catch (error) {
        console.log(error, "Error in Course Updating");
        res.status(500).json({ error: "Something went Wrong when creating updateCourse" })
    }
}


export const deleteCourse = async (req, res) => {
    const { courseId } = req.params;
    try {
        const course = await Course.findOneAndDelete({ _id: courseId })
        res.status(201).json({ message: "deleted Successfully" })
        console.log("Deleted the Course");
    } catch (error) {
        console.log(error, "Error in course deleting");
        res.status(500).json({ error: "Something went Wrong when Deleting deleteCourse" })

    }
}
