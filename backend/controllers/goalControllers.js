const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler((req, res) => {
  res.status(200).json({ message: "These are the goals" });
});

const getSingleGoal = asyncHandler((req, res) => {
  res.status(200).json({ message: `This is goal ${req.params.id}` });
});

const createGoal = asyncHandler((req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please Add a Text");
  }
  res.status(200).json({ message: "Goal created successfully" });
});

const updateGoal = asyncHandler((req, res) => {
  res.status(200).json({ message: `Updated goal ${req.params.id}` });
});

const deleteGoal = asyncHandler((req, res) => {
  res.status(200).json({ message: `Deleted goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  getSingleGoal,
  createGoal,
  updateGoal,
  deleteGoal,
};
