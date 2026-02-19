import express from "express";

import { createStudent, getAllStudent, getStudentById, updateStudent, deleteStudent } from "../controllers/student.controller.js";

const route = express.Router();

// create student
route.post('/', createStudent);

// read all student
route.get('/', getAllStudent);

// read student by id
route.get('/:id', getStudentById);

// update student by id
route.put('/:id', updateStudent);

// delete student by id
route.delete('/:id', deleteStudent);

export default route;

