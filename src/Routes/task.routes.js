const { Router } = require("express");
const {
  getTasksByUserId,
  createTask,
  completeTask,
} = require("../Controllers/tasks.controllers");
const authVerification = require("../Middlewars/authenticate");

const router = Router();

router.get("/task/:userId", authVerification, getTasksByUserId);
router.post("/task", authVerification, createTask);
router.patch("/task/:id", authVerification, completeTask);

module.exports = router;
