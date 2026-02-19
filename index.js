import express, { urlencoded } from 'express';

import config from './config/env.config.js';
import connectDB from './config/db.config.js';
import errorMiddleware from './middlewares/error.middleware.js';

import studentRouter from './routes/student.route.js';
import courseRoute from './routes/course.route.js';
import enrollmentRoute from './routes/enrollment.route.js';

const app = express();

// middlewares
app.use(express.json());
app.use(urlencoded({extended: true}));

// database connection
connectDB();

// routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/students', studentRouter);
app.use('/courses', courseRoute);
app.use('/enrollments', enrollmentRoute);

// error middleware
app.use(errorMiddleware);

// server listening 
app.listen(config.PORT, ()=>{
    console.log(`Server is running on port ${config.PORT}`);
})