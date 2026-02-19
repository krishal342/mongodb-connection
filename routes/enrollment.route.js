import express from 'express';

const enrollmentRoute = express.Router();

import { createEnrollment, getAllEnrollment,getEnrollmentById, deleteEnrollment} from '../controllers/enrollment.controller.js';

// create enrollment
enrollmentRoute.post('/', createEnrollment);

// get all enrollment
enrollmentRoute.get('/', getAllEnrollment);

// get enrollment by id
enrollmentRoute.get('/:id', getEnrollmentById);

// delete enrollment
enrollmentRoute.delete('/:id', deleteEnrollment);

export default enrollmentRoute;