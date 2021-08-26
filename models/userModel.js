import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    },
    role: {
        type:String,
        default: 'user'
    },
    root: {
        type:Boolean,
        default: false
    },
    avatar: {
        type:String,
        default: 'https://res.cloudinary.com/pappztec/image/upload/v1629958621/Shopper/commonAvatar_wqlhck.png'
    }
}, {
    timestamps:true
});

let DataSet = mongoose.models.user || mongoose.model('user', userSchema);
export default DataSet;