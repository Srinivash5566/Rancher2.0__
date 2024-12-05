const mongoose = require("mongoose");
const { dbUrlLocal } = require("../constants");

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrlLocal);
    console.log("Database connection successful...");
  } catch (e) {
    console.error("Database connection error:", e);
    process.exit(1);
  }
};

module.exports = connectDB;
