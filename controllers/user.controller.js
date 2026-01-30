import userModel from '../models/user.model.js';


// create operation
export const createController = async (req, res, next) => {
    try{
        const {name, email} = req.body;
        email = email.toLowerCase();
        const user = await userModel.create({name, email});
        res.status(201).json(user);

    }catch(err){
        next(err);
    }
}


// read operation
export const getAllUserController = async (req, res, next) => {
    try{
        const users = await userModel.find();
        res.status(200).json(users);
        
    }catch(err){
        next(err);
    }
}

export const getUserByIdController = async (req, res, next) =>{
    try{
        const id = req.params.id;
        const user = await userModel.findById(id);
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
}

// update operation
export const updateUserController = async (req, res, next) => {
    try{
        const id = req.params.id;
        const {name, email} = req.body;
        const user = await userModel.findById(id);
        user.name = name || user.name;
        user.email = email ? email.toLowerCase() : user.email;
        await user.save();

        res.status(200).json(user);
    }catch(err){
        next(err);
    }
}

// delete operation
export const deleteUserController = async (req, res, next) => {
    try{
        const id = req.params.id;
        await userModel.findByIdAndDelete(id);
        res.status(200).json({message: 'User deleted successfully'});
    }catch(err){
        next(err);
    }
}