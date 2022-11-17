const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  getUserWithAddress,
  getUserTask,
  createUser,
  updateUser,
} = require("../Controllers/users.controllers");

const router = Router();

router.get("/users", getAllUsers);
router.get("/users/:userId", getUserById);
router.get("/users/:userId/address", getUserWithAddress);
router.get("/users/:userId/task", getUserTask);

router.post("/users", createUser);
router.put("/users/:id", updateUser);

module.exports = router;

//servicio, controllador, rutas, app
