import connectDB from "../../../Utility/connectDB";
import Users from '../../../models/userModel'
const bcrypt = require ('bcrypt');

connectDB();

export default async (req,res) => {
    switch (req.method) {
        case "POST":
            await register(req,res);
            break;
    }
};

const register = async (req,res) => {
    try {
        const {userName,email,cu_Password,cf_password} = req.body;

        const findUser = await Users.findOne({email});
        if (findUser) return res.status(400).json({err:'This Email already Exists'}); // error handling
        const passwordHash = await bcrypt.hash(cu_Password,12);
        const newUser = new Users({userName,email,password:passwordHash,cf_password})
        console.log(newUser);
        await newUser.save();
        res.json({msg:"Register Success"});
    }
    catch (e) {
        return res.status(500).json({err:e.message})
    }
}