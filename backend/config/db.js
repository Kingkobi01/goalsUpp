const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = async (url) => {
  try {
    const conn = await mongoose.connect(url);
    console.log(`\nMongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = { connectDB };
