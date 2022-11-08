const { Sequelize } = require("sequelize");

require("dotenv").config();

const db = new Sequelize({
  database: process.env.DATABASE || "todo",
  username: process.env.USERNAME || "postgres",
  host: process.env.HOST || "localhost",
  port: process.env.PORT_DB || 5432,
  password: process.env.PASSWORD || "root",
  dialect: "postgres",
});

module.exports = db;
