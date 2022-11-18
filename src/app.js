const express = require("express");
const initModels = require("./models/initModels");
const db = require("./utils/database");

const userRoutes = require("./Routes/users.routes");
const taskRoutes = require("./Routes/task.routes");
const authRoutes = require("./Routes/auth.routes");

const morgan = require("morgan");
const logs = require("./Middlewars/requestLogs");
const handleError = require("./Middlewars/handleErrors");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(logs);

app.use(morgan("dev"));
app.use(cors());
const PORT = process.env.PORT;

//sync db
db.authenticate()
  .then(() => console.log("Ok"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("db sync"))
  .catch((error) => console.log(error));

initModels();

app.get("/", (request, response, next) => {
  response.status(200).json({ message: "ok" });
  next();
});

//midleware
app.use("/api/v1", userRoutes);
app.use("/api/v1", taskRoutes);
app.use("/api/v1", authRoutes);
// app.use("/api/v1", tasksRoutes);

app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
