import studentModel from '../models/student.model.js';


// create operation
export const createStudent = async (req, res, next) => {
    try{
        const {name, email, address} = req.body;
        email = email.toLowerCase();
        const user = await studentModel.create({name, email, address});
        res.status(201).json(user);

    }catch(err){
        next(err);
    }
}


// read operation
export const getAllStudent = async (req, res, next) => {
    try{
        const users = await studentModel.find();
        res.status(200).json(users);
        
    }catch(err){
        next(err);
    }
}

export const getStudentById = async (req, res, next) =>{
    try{
        const id = req.params.id;
        const user = await studentModel.findById(id);
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
}

// update operation
export const updateStudent = async (req, res, next) => {
    try{
        const id = req.params.id;
        const {name, email, address} = req.body;
        const user = await studentModel.findById(id);
        user.name = name || user.name;
        user.email = email ? email.toLowerCase() : user.email;
        user.address = address || user.address;
        await user.save();

        res.status(200).json(user);
    }catch(err){
        next(err);
    }
}

// delete operation
export const deleteStudent = async (req, res, next) => {
    try{
        const id = req.params.id;
        await studentModel.findByIdAndDelete(id);
        res.status(200).json({message: 'Student record deleted successfully'});
    }catch(err){
        next(err);
    }
}