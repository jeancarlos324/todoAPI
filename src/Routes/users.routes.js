const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  getUserWithAddress,
  getUserTask,
} = require("../Controllers/users.controllers");

const router = Router();

router.get("/users", getAllUsers);
router.get("/users/:userId", getUserById);
router.get("/users/:userId/address", getUserWithAddress);
router.get("/users/:userId/task", getUserTask);
module.exports = router;

//servicio, controllador, rutas, app
