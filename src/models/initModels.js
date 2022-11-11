const Addresses = require("./addresses.model");
const Categories = require("./categories.modules");
const TaskCategories = require("./taskcategories.models");
const Task = require("./tasks.models");
const Users = require("./users.models");

const initModels = () => {
  ///one to one
  Users.hasOne(Addresses, { as: "home", foreignKey: "user_id" });
  Addresses.belongsTo(Users, { as: "resident", foreignKey: "user_id" });

  ///one to many
  Users.hasMany(Task, { as: "todos", foreignKey: "user_id" });
  Task.belongsTo(Users, { as: "author", foreignKey: "user_id" });

  ///many to many
  // if dont existens any relationship
  // Task.belongsToMany(Categories, { through: "task_categories" });
  // Categories.belongsToMany(Task, { through: "task_categories" });

  Task.hasMany(TaskCategories, { as: "categories", foreignKey: "task_id" });
  TaskCategories.belongsTo(Task, { as: "todos", foreignKey: "id" });

  Categories.hasMany(TaskCategories, {
    as: "todos",
    foreignKey: "category_id",
  });
  TaskCategories.belongsTo(Categories, {
    as: "category",
    foreignKey: "id",
  });
};

module.exports = initModels;
