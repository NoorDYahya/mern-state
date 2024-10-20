import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';
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
export const signnin = async (req,res,next) =>{
    const {email,password} = req.body;
    try {
        const validUser = await User.findOne({email});
        if(!validUser){
            return next(errorHandler(404,'User is not found'));
        }
        const validPassword = bcryptjs.compareSync(password,validUser.password);
        if (!validPassword) return next(errorHandler(401,'Wrong cridentials!'));
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET);
        //remove passsword from the data saved in 'validUser' before return data to the user
        const {password: pass,...rest} = validUser._doc;
        res.cookie('access_token',token,{httpOnly:true})
        .status(200)
        .json(rest);

    } catch (error) {
        next(error);
    }
};