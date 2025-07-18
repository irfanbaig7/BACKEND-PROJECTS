import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    coverimage: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }

}, { timestamps: true })

export const Course = mongoose.model("Course", courseSchema)
