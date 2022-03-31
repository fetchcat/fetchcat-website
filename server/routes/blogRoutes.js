const express = require("express");
const router = express.Router();

const {
  postNewBlog,
  getLatestBlogs,
} = require("../controllers/blogController");

// --- Routes for /blog --- //

router.route("/new").post(postNewBlog);
router.route("/latest").get(getLatestBlogs);

module.exports = router;
