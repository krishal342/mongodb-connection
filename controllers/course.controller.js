import courseModel from "../models/course.model.js";

// create course operation
export const createCourse = async (req, res, next) => {
    try {
        let { title, description, creditHours } = req.body;
        const course = await courseModel.create({ title, description, creditHours });
        res.status(201).json(course);
    } catch (err) {
        next(err);
    }
};


// read all course operation
export const getAllCourse = async (req, res, next) => {
    try {
        const courses = await courseModel.find();
        res.status(200).json(courses);
    } catch (err) {
        next(err);
    }
};

// read course by id
export const getCourseById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const course = await courseModel.findById(id);
        res.status(200).json(course);
    } catch (err) {
        next(err);
    }
};

// update course by id
export const updateCourse = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { title, description, creditHours } = req.body;
        let course = await courseModel.findById(id);
        course.title = title || course.title;
        course.description = description || course.description;
        course.creditHours = creditHours || course.creditHours;
        await course.save();
        res.status(200).json(course);
    } catch (err) {
        next(err);
    }
};

// delete course by id
export const deleteCourse = async (req, res, next) => {
    try {
        const id = req.params.id;
        await courseModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Course record deleted successfully" });
    } catch (err) {
        next(err);
    }
};
