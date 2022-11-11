const express = require("express");
const initModels = require("./models/initModels");
const db = require("./utils/database");

const userRoutes = require("./Routes/users.routes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

//sync db
db.authenticate()
  .then(() => console.log("Ok"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("db sync"))
  .catch((error) => console.log(error));

initModels();

app.get("/", (req, res) => {
  res.status(200).json({ message: "ok" });
});

//midleware
app.use("/api/v1", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
