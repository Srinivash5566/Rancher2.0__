const mongoose = require("mongoose");
const { dbUrlLocal, dbUrl } = require("../constants");

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Database connection successful...");
  } catch (e) {
    console.error("Database connection error:", e);
    process.exit(1);
  }
};

module.exports = connectDB;
