const express = require("express");
const router = express.Router();

const { sendContactForm, sendGrid } = require("../controllers/emailController");

router.route("/").post(sendContactForm);
router.route("/sendgrid").post(sendGrid);

module.exports = router;
