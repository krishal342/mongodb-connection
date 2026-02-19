import studentModel from '../models/student.model.js';


// create operation
export const createStudent = async (req, res, next) => {
    try{
        let {name, email, address} = req.body;
        email = email.toLowerCase();
        const student = await studentModel.create({name, email, address});
        res.status(201).json(student);

    }catch(err){
        next(err);
    }
}


// read operation
export const getAllStudent = async (req, res, next) => {
    try{
        const students = await studentModel.find();
        res.status(200).json(students);
        
    }catch(err){
        next(err);
    }
}

export const getStudentById = async (req, res, next) =>{
    try{
        const id = req.params.id;
        const student = await studentModel.findById(id);
        res.status(200).json(student);
    }catch(err){
        next(err);
    }
}

// update operation
export const updateStudent = async (req, res, next) => {
    try{
        const id = req.params.id;
        const {name, email, address} = req.body;
        let student = await studentModel.findById(id);
        student.name = name || student.name;
        student.email = email ? email.toLowerCase() : student.email;
        student.address = address || student.address;
        await student.save();

        res.status(200).json(student);
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