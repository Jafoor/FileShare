import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import Authentication from "../models/authentication.js";

const secret = "firstWebsite";

export const Register = async (req, res) => {
    try{
        const saltRounds = 10;

        const { email , password, fullname } = req.body;
        console.log(req.body);

        const oldUser = await Authentication.findOne({ email });

        console.log(oldUser);

        if(oldUser) return res.status(400).json({ message : "User Already Exists"});

        // bcrypt.genSalt(saltRounds, function(err, salt){
        //     bcrypt.hash(password, salt, function(err, hash){

        //     })
        // })

        const hashesPassword = await bcrypt.hash(password, saltRounds);

        const result = await Authentication.create({email, fullname, password: hashesPassword});

        const token = jwt.sign({ email: result.email, id: result._id}, secret, { expiresIn: "1h"});

        return res.status(201).json("User has been created.");
        

    }catch(err){
        res.status(500).json({message: "Something Went Wrong"})
    }
};

export const Signin = async (req, res) => {

    try{
        const { email , password } = req.body;
        // console.log(req.body);

        const oldUser = await Authentication.findOne({ email });

        // console.log(oldUser);

        if(!oldUser) return res.status(404).json({message: "User not found!"});

        // check password
        const isPasswordCorrect = bcrypt.compareSync(password, oldUser.password);

        // console.log(isPasswordCorrect);

        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid Password!"});

        const token = jwt.sign({ email, id: oldUser._id}, secret, { expiresIn: "1h"});

        const { password:userPassword, ...other } = oldUser;

        console.log(token);
        res
        .cookie("access_token", token, {
            httpOnly: true,
        })
        .status(200)
        .json(other)

        // console.log(res.cookies.access_token);
    }catch(err){
        res.status(500).json({message: "Something Went Wrong"})
    }
};

export const Logout = (req, res) => {
    res.clearCookie("access_token",{
      sameSite:"none",
      secure:true
    }).status(200).json("User has been logged out.")
  };