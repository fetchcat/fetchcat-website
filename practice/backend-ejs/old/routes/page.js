// Express

const express = require("express");
const router = express.Router();

// Page Controller

const {
  getHomePage,
  getBlogPage,
  getPortfolioPage,
  getAboutPage,
  getContactPage,
  readMore,
} = require("../controllers/page");

// Page Routes

router.route("/").get(getHomePage);
router.route("/blog").get(getBlogPage);
router.route("/portfolio").get(getPortfolioPage);
router.route("/about").get(getAboutPage);
router.route("/contact").get(getContactPage);

router.route("/more/:slug").get(readMore);

module.exports = router;
