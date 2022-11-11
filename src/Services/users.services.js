const Addresses = require("../models/addresses.model");
const Categories = require("../models/categories.modules");
const TaskCategories = require("../models/taskcategories.models");
const Task = require("../models/tasks.models");
const Users = require("../models/users.models");

class UsersServices {
  static async getAll() {
    try {
      const query = await Users.findAll({
        attributes: ["id", "username", "email"],
      });
      return query;
    } catch (error) {
      throw error;
    }
  }

  static async getById(userId) {
    try {
      const query = await Users.findByPk(userId, {
        attributes: ["id", "username", "email"],
      });
      return query;
    } catch (error) {
      throw error;
    }
  }

  static async getAddressUser(id) {
    try {
      const query = await Users.findOne({
        where: { id },
        attributes: ["id", "username"],
        include: {
          model: Addresses,
          as: "home",
          attributes: {
            exclude: ["user_id", "userId"],
          },
        },
      });
      return query;
    } catch (error) {
      throw error;
    }
  }

  static async getTask(id) {
    try {
      const query = await Users.findOne({
        where: { id },
        attributes: ["id", "username"],
        include: {
          as: "todos",
          model: Task,
          attributes: ["title", "description", "isComplete"],
          include: {
            model: TaskCategories,
            as: "categories",
            attributes: ["category_id"],
            include: {
              model: Categories,
              as: "category",
              attributes: ["name"],
            },
          },
        },
      });
      return query;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsersServices;
