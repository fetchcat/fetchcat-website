const { Router } = require("express");

const router = Router();

const { postRegister, postLogin } = require("../controllers/authController");

router.post("/register", postRegister);

router.post("/login", postLogin);

module.exports = router;
