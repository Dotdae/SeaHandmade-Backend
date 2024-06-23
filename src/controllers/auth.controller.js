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

    res.send('Login');
    
}