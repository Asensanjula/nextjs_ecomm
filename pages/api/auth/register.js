import connectDB from "../../../Utility/connectDB";
import Users from '../../../models/userModel'


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
        const {name,email,password,cf_password} = req.body;

        const passwordHash = await bcrypt.hash(password,12);
        const newUser = new Users({name,email,password: passwordHash,cf_password})

        res.json({msg:"Register Success"});
    }
    catch (e) {
        return res.status(500).json({err:e.message})
    }
}