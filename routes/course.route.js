import express from 'express';

const courseRoute = express.Router();

import { createCourse, getAllCourse, getCourseById, updateCourse, deleteCourse } from '../controllers/course.controller.js';

// create course
courseRoute.post('/', createCourse);

// get all course
courseRoute.get('/', getAllCourse);

// get course by id
courseRoute.get('/:id', getCourseById);

// update course by id
courseRoute.put('/:id', updateCourse);

// delete course by id
courseRoute.delete('/:id', deleteCourse);

export default courseRoute;