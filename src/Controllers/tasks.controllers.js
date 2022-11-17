const TasksServices = require("../Services/tasks.services");

const getTasksByUserId = async (request, response, next) => {
  try {
    const { userId } = request.params;
    const result = await TasksServices.getByUserId(userId);
    response.status(200).json(result);
  } catch (error) {
    next({
      message: "no se pudieron obtener las tareas",
      status: 400,
      errorContent: error,
    });
  }
};

const createTask = async (request, response, next) => {
  try {
    const { task, categories } = request.body;
    const result = await TasksServices.create(task, categories);
    response.status(201).json({ message: "La tarea ha sido creada" });
  } catch (error) {
    next({
      message: "Algo salio mal al crear la tarea",
      status: 400,
      errorContent: error,
    });
  }
};

const completeTask = async (request, response, next) => {
  try {
    const { id } = request.params;
    const result = await TasksServices.updateStatus(id);
    response.status(200).json({ message: "Tarea actualizada" });
  } catch (error) {
    next({
      message: "No se ha podido actualizar la tarea",
      status: 400,
      error: error,
    });
  }
};

module.exports = {
  getTasksByUserId,
  createTask,
  completeTask,
};