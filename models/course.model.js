import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    creditHours: {
        type: Number,
        required: true
    },
    student: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }]
});

const courseModel = mongoose.model('Course', courseSchema);

export default courseModel;