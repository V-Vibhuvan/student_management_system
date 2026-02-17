const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");
const authController = require("../controllers/authController");

router.post("/register",wrapAsync(authController.register));

router.post("/login", wrapAsync(authController.login));

router.post("/logout", wrapAsync(authController.logout));

module.exports = router;
