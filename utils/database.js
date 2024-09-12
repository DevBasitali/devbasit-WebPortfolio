import mongoose from "mongoose";

let isConnected = false;
let dbConnection;

export const connectToDB = async () => {

  if (isConnected) {
    console.log("MongoDB is already connected");
    return dbConnection;
  }

  try {
    dbConnection = await mongoose.connect(process.env.MongoDB_URI, {
      dbName: "Users",
    });

    isConnected = true;
    console.log("MongoDB is connected");
    return dbConnection;
    
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default connectToDB;
