import userModel from '../models/user.model.js';

export const createController = (req, res, next) => {
    try{
        const {name, email} = req.body;
        const user = userModel.create({name, email});
        res.status(201).json(user);

    }catch(err){
        next(err);
    }
}

export const getAllUserController = (req, res, next) => {
    try{
        const users = userModel.find();
        res.status(200).json(users);
        
    }catch(err){
        next(err);
    }
}

export const getUserByIdController = (req, res, next) =>{
    try{
        const id = req.params.id;
        const user = userModel.findById(id);
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
}