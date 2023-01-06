const Goal = require("../Models/goalsModel");

const getGoals = async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
};

const getSingleGoal = async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  console.log(`Goal: ${goal}`);
  if (!goal) {
    res.status(400);
    throw new Error(`Goal not found for ${req.params.id}`);
  }
  res.status(200).json(goal);
};

const createGoal = async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Please Add a Text");
  }
  const goal = await Goal.create({
    title: req.body.title,
  });
  res.status(200).json(goal);
};

const updateGoal = async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error(`Goal not found for ${req.params.id}`);
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
};

const deleteGoal = async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error(`Goal not found for ${req.params.id}`);
  }
  await goal.remove();
  res.status(200).json({ message: `Deleted goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  getSingleGoal,
  createGoal,
  updateGoal,
  deleteGoal,
};
