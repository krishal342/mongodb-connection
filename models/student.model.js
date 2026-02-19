import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    admissionOn: {
        type: Date,
        default: Date.now
    },
    course: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }]
});

const studentModel = mongoose.model('Student', studentSchema);

export default studentModel;