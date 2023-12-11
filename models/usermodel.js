import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,

    },
    role: {
        type: Number,
        default: 0,
    },
    userType:{
         type:String,
        enum:['buyer', 'seller']

    },
}, {
    timestamps: true,
});

export default mongoose.model('User', userSchema);
