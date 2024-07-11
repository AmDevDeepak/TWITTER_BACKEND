import mongoose from "mongoose";
// const url = "mongodb://127.0.0.1:27017/twitter_dev";
import { config } from "./serverConfig.js";
export const connect = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Some error occurred while connecting to MongoDB", error);
  }
};
