const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost/twitter_dev");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Some errror occurred during connecting to MongoDB");
  }
};

module.exports = connect;