import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
export const signup = async (req,res,next) => {

    const {username,email,password} = req.body;

    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password,salt);

    const newUser = new User({username,email,password: hashedPassword});
    try{
        await newUser.save();
        res.status(201).json("user cretaed successfully!");
    }
    catch(error){
        next(error);
    }


};