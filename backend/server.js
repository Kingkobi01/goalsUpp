const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const goalRoutes = require("./routes/goalRoutes");
const { errorHandler } = require("./middleware/ErrMiddleware");
const { connectDB } = require("./config/db");
const colors = require("colors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/goals", goalRoutes);
app.use(errorHandler);

const start = async () => {
  try {
    const connection = await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server running on PORT: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
