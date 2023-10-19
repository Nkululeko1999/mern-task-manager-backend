import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error.message);
    }
}