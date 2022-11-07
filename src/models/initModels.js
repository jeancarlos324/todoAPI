const Addresses = require("./addresses.model");
const Categories = require("./categories.modules");
const Task = require("./tasks.models");
const Users = require("./users.models");

const initModels = () => {
  ///one to one
  Users.hasOne(Addresses, { as: "home", foreignKey: "user_id" });
  Addresses.belongsTo(Users, { as: "user", foreignKey: "user_id" });

  ///one to many
  Users.hasMany(Task, { as: "todo", foreignKey: "user_id" });
  Task.belongsTo(Users, { as: "author", foreignKey: "user_id" });

  ///many to many
  Task.belongsToMany(Categories, { through: "task_categories" });
  Categories.belongsToMany(Task, { through: "task_categories" });
  
};

module.exports = initModels;
