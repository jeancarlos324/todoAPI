const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Categories = require("./categories.modules");
const Task = require("./tasks.models");

const TaskCategories = db.define(
  "task_categories",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: "id",
        model: Categories,
      },
      field: "category_id",
    },
    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: "id",
        model: Task,
      },
      field: "task_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = TaskCategories;
