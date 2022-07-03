const express = require("express");
const router = express.Router();
const authController = require("./Controllers/auth-controller");

router.post("/api/send-otp", authController.sendOtp);

module.exports = router;
