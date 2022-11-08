const express = require("express");
const initModels = require("./models/initModels");
const db = require("./utils/database");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

//sync db
db.authenticate()
  .then(() => console.log("Ok"))
  .catch((error) => console.log(error));

db.sync({ force: true })
  .then(() => console.log("db sync"))
  .catch((error) => console.log(error));

initModels();

app.get("/", (req, res) => {
  res.status(200).json({ message: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
