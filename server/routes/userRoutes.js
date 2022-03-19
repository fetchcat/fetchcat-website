const express = require("express");
const router = express.Router();

const {
  postRegisterUser,
  postLoginUser,
} = require("../controllers/userController");

// --- User Routes for /user --- //

router.route("/login").post(postLoginUser);
router.route("/register").post(postRegisterUser);

module.exports = router;
