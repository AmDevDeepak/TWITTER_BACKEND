const mongoose = require("mongoose");
const { MONGODB_URI } = require("./serverConfig");
const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Some error occurred while connecting to MongoDB", error);
  }
};

module.exports = connect;