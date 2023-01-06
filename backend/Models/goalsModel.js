const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please type in a goal"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Goal", goalSchema);
