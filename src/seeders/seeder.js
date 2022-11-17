const Addresses = require("../models/addresses.model");
const Categories = require("../models/categories.modules");
const initModels = require("../models/initModels");
const TaskCategories = require("../models/taskcategories.models");
const Task = require("../models/tasks.models");
const Users = require("../models/users.models");
const db = require("../utils/database");

// initModels();
const users = [
  { username: "Ian Rosas", email: "ian@gmail.com", password: "1234" },
  { username: "Alvis Echeverria", email: "alvis@gmail.com", password: "1234" },
  { username: "Carlos Tineo", email: "carlos@gmail.com", password: "1234" },
];

const addresses = [
  { street: "Buena Vista", number: 157, userId: 1 },
  { street: "benito Juarez", number: 57, userId: 2 },
  { street: "Madero", number: 157, userId: 3 },
];

const tasks = [
  {
    title: "Crear seeders",
    description: "Terminar el archivo para los seeders",
    userId: 1,
  },
  {
    title: "Pasear al perro",
    description: "Darle la vuelta por todo el barrio a firulais",
    userId: 2,
  },
  {
    title: "Tomar dos litros de agua",
    userId: 3,
  },
];

const categories = [
  { name: "personal" },
  { name: "escuela" },
  { name: "salud" },
  { name: "trabajo" },
  { name: "hogar" },
  { name: "deporte" },
  { name: "ocio" },
  { name: "financiero" },
];

const taskCategories = [
  { taskId: 1, categoryId: 1 },
  { taskId: 1, categoryId: 2 },
  { taskId: 1, categoryId: 4 },
  { taskId: 2, categoryId: 1 },
  { taskId: 2, categoryId: 3 },
  { taskId: 2, categoryId: 6 },
  { taskId: 2, categoryId: 7 },
  { taskId: 3, categoryId: 1 },
  { taskId: 3, categoryId: 3 },
];

db.sync({ force: true })
  .then(async () => {
    console.log("Init seed");
    users.forEach((user) => Users.create(user));
    setTimeout(() => {
      categories.forEach((category) => Categories.create(category));
    }, 100);
    setTimeout(() => {
      tasks.forEach((task) => Task.create(task));
    }, 200);
    setTimeout(() => {
      addresses.forEach((address) => Addresses.create(address));
    }, 300);
    setTimeout(() => {
      taskCategories.forEach((tc) => TaskCategories.create(tc));
    }, 400);
  })
  .catch((error) => {
    console.log(error);
  });
