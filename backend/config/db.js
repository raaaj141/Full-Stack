import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://infihubz:Gokul$123@cluster0.qbusuye.mongodb.net/infihub').then(()=> console.log("DB Connected"));
}