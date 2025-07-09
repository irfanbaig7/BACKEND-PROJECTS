import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTION = {
      dbName: "crud",
    };

    await mongoose.connect(DATABASE_URL, DB_OPTION);
    console.log("MongoDB connected successfully");

  } catch (error) {
    console.log(error.message);
    console.log("Coneaction has been failed");
    
  }
};


export default connectDB
