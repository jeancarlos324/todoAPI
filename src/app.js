const express = require("express");
const initModels = require("./models/initModels");
const db = require("./utils/database");

const app = express();
const PORT = 8000;

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
