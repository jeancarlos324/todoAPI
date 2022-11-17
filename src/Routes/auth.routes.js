const { Router } = require("express");
const authUser = require("../Controllers/auth.controllers");

const router = Router();

router.post("/auth/login", authUser);

module.exports = router;
