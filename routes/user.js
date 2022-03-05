// Express

const express = require("express");
const router = express.Router();

// Middleware

const { ensureAuthenticated } = require("../middleware/auth");

// User Controller

const {
  registerUser,
  getDashboard,
  loginUser,
  getLoginPage,
  getRegisterPage,
  userLogout,
} = require("../controllers/user");

// User Routes

router.route("/login").get(getLoginPage).post(loginUser);
router.route("/register").get(getRegisterPage).post(registerUser);
router.route("/dashboard").get(ensureAuthenticated, getDashboard);
router.route("/logout").get(userLogout);

module.exports = router;
