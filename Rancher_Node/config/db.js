const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_DB_ATLAS || "mongodb://localhost:27017/Rancher",
    );
    console.log("Database connection successful...");
  } catch (e) {
    console.error("Database connection error:", e);
    process.exit(1);
  }
};

module.exports = connectDB;
