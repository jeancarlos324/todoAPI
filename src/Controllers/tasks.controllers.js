const TasksServices = require("../Services/tasks.services");

const getTasksByUserId = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await TasksServices.getByUserId(userId);
    res.status(200).json(result);
  } catch (error) {
    next({
      message: "Cant get any task ",
      status: 400,
      errorContent: error,
    });
  }
};


 module.exports = getTasksByUserId;
