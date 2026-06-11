import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB!);
        console.log("Database connected ✅")
    }
    catch(err){
        console.log("Database connection failed ❌");
    }
}