import mongoose from "mongoose";
import colors from 'colors';

const connectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB Connected`.bgCyan.black);
    } catch (error) {
        console.log(`connection faild`.bgBlue.white);
    }
};

export default connectDB;