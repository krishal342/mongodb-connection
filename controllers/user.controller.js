import userModel from '../models/user.model.js';

export const createController = async (req, res, next) => {
    try{
        const {name, email} = req.body;
        const user = await userModel.create({name, email});
        res.status(201).json(user);

    }catch(err){
        next(err);
    }
}

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