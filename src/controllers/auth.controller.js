import User from '../models/User.model.js'; 
import bcrypt from 'bcryptjs';
import 'dotenv/config';
import { createAccessToken } from '../libs/jwt.js';

export const authRegister = async (req, res) =>{

    
    try{

        const { username, email, password } = req.body;

        const userFound = await User.findOne({  email });


        if(userFound){

            return res.status(400).json({
                message: ["The email is already in use."]
            });

        }

        // Encrypt password.

        const encryptPassword = await bcrypt.hash(password, 10);


        // Creating new user.

        const newUser = new User({
            username,
            email,
            password: encryptPassword,
        });

        // Saving in database.

        const userSaved = await newUser.save();
    

        // Create access token.
        
        const token = await createAccessToken({
            id: userSaved._id,
        })

        // Save token in a cookie.

        res.cookie('token', token);

       res.json({
        id: userSaved._id,
        username: userSaved.username,
        email: userSaved.email,
       });


    }
    catch(error){
        
        return res.status(500).json({
            message: error.message
        })

    }

}

export const authLogin = async (req, res) =>{

    try{

        const { email, password} = req.body;
        const userFound = await User.findOne({ email });

        if(!userFound) 
            return res.status(400).json({
                
                message: ['The email does not exist.'],

            });

        const isMatch = await bcrypt.compare(password, userFound.password);
        
        if (!isMatch) 
            
            return res.status(400).json({

            message: ["The password is incorrect"],

              });

        const token = await createAccessToken({
            id: userFound._id,
            username: userFound.username,
        });

        res.cookie('token', token);

        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        });

    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
    

}

export const authLogout = async (req, res) => {

    res.cookie('token', '', {
        expires: new Date(0),
    })

    return res.sendStatus(200);

}