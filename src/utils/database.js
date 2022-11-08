const { Sequelize } = require("sequelize");

require("dotenv").config();
const username = process.env.USERNAME;

const db = new Sequelize({
  database: process.env.DATABASE,
  username: "postgres",
  password: "root",
  host: process.env.HOST,
  port: process.env.PORT_DB,
  dialect: process.env.DIALECT,
});

module.exports = db;
