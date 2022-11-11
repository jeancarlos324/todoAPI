const { Sequelize } = require("sequelize");

require("dotenv").config();

const db = new Sequelize({
  database: process.env.DATABASE,
  username: process.env.DB_USERNAME,
  host: process.env.HOST,
  port: process.env.PORT_DB,
  password: process.env.PASSWORD,
  dialect: "postgres",
});

module.exports = db;
