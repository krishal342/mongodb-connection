import express, { urlencoded } from 'express';

import config from './config/env.config.js';
import connectDB from './config/db.config.js';
import errorMiddleware from './middlewares/error.middleware.js';

import { createController, getAllUserController, getUserByIdController } from './controllers/user.controller.js';

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

app.post('/users', createController);
app.get('/users', getAllUserController);
app.get('/users/:id', getUserByIdController);

// error middleware
app.use(errorMiddleware);

// server listening 
app.listen(config.PORT, ()=>{
    console.log(`Server is running on port ${config.PORT}`);
})