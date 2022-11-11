const Task = require("../models/tasks.models");

class TasksServices {
  static async getByUserId(userId) {
    try {
      const result = await Task.findOne({
        where: { userId },
        attributes: ["id", "title", "description", "isComplete"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TasksServices;
