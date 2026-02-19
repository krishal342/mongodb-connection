import enrollmentModel from "../models/enrollment.model.js";
import studentModel from "../models/student.model.js";
import courseModel from "../models/course.model.js";

// create enrollment 
export async function createEnrollment(req, res, next){
    try{
        const courseId = req.body.course;
        const studentId = req.body.student;
        const enrollment = await enrollmentModel.create({course:courseId, student:studentId});

        const student = await studentModel.findById(studentId);
        student.course.push(courseId);
        await student.save();

        const course = await courseModel.findById(courseId);
        course.student.push(studentId);
        await course.save();

        res.status(201).json(enrollment);

    }catch(err){
        next(err);
    }
}

// get all enrollment
export async function getAllEnrollment(req, res, next){
    try{
        const enrollments = await enrollmentModel.find().populate("course").populate("student");
        res.status(200).json(enrollments);
    }catch(err){
        next(err);
    }
}

// get enrollment by id
export async function getEnrollmentById(req, res, next){
    try{
        const id = req.params.id;
        const enrollment = await enrollmentModel.findById(id).populate("course").populate("student");
        res.status(200).json(enrollment);
    }catch(err){
        next(err);
    }
}

// delete enrollment
export async function deleteEnrollment(req, res, next){
    try{
        const id = req.params.id;
        const enrollment = await enrollmentModel.findByIdAndDelete(id);

        await studentModel.findByIdAndUpdate(enrollment.student, {$pull: {course: enrollment.course}});

        await courseModel.findByIdAndUpdate(enrollment.course, {$pull: {student: enrollment.student}});

        res.status(200).json({message: "Enrollment record deleted successfully"});
    }catch(err){
        next(err);
    }
}
