import bcrypt from "bcryptjs";

import Authentication from "../models/postMessage.js";

export const register = async (req, res) => {
    try{
        const saltRounds = 10;

        const { email , password, fullname } = req.body;

        const oldUser = await Authentication.findOne({ email });

        if(oldUser) return res.status(400).json({ message : "User Already Exists"});

        // bcrypt.genSalt(saltRounds, function(err, salt){
        //     bcrypt.hash(password, salt, function(err, hash){

        //     })
        // })

        const hashesPassword = await bcrypt.hash(password, saltRounds);

        const result = await Authentication.create({email, fullname, password: hashesPassword});

        

    }catch(err){
        res.status(500).json({message: "Something Went Wrong"})
    }
}