const express = require("express");
const router = express.Router();

const { postNewBlog } = require("../controllers/blogController");

// --- Routes for /blog --- //

router.route("/new").post(postNewBlog);

module.exports = router;
