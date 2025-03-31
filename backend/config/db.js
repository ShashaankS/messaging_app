import mongoose from 'mongoose';
import {} from "dotenv/config";

const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGODB_URI);
    const connect = await mongoose.connect('mongodb+srv://paradox24:Shashaank@24@messagingapp.abi2pkk.mongodb.net/?retryWrites=true&w=majority&appName=MessagingApp');

    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;