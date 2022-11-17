const Categories = require("../models/categories.modules");
const TaskCategories = require("../models/taskcategories.models");
const Task = require("../models/tasks.models");

class TasksServices {
  static async getByUserId(userId) {
    try {
      const result = await Task.findAll({
        where: { userId },
        attributes: ["id", "title", "description", "isComplete"],
        include: {
          model: TaskCategories,
          as: "categories",
          attributes: ["categoryId"],
          include: {
            model: Categories,
            as: "category",
            attributes: ["name","id"],
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(task, categories) {
    try {
      const taskResult = await Task.create(task);
      const { id } = taskResult;
      categories.forEach(
        async (category) =>
          await TaskCategories.create({ categoryId: category, taskId: id })
      );
      return taskResult;
    } catch (error) {
      throw error;
    }
  }

  static async updateStatus(id) {
    try {
      const result = await Task.update(
        { isComplete: true },
        {
          where: { id },
        }
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TasksServices;
