const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Users = require("./users.models");

const Task = db.define(
  "task",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    isComplete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: "is_complete",
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: "id",
        model: Users,
      },
      field: "user_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Task;
