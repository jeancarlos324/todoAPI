const { Router } = require("express");
const {
  getTasksByUserId,
  createTask,
  completeTask,
} = require("../Controllers/tasks.controllers");

const router = Router();

router.get("/task/:userId", getTasksByUserId);
router.post("/task", createTask);
router.patch("/task/:id", completeTask);

module.exports = router;
