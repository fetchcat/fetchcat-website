const express = require("express");
const router = express.Router();

const {
  postNewBlog,
  getLatestBlogs,
  getBlogDetails,
} = require("../controllers/blogController");

// --- Routes for /blog --- //

router.route("/new").post(postNewBlog);
router.route("/latest").get(getLatestBlogs);
router.route("/:slug").get(getBlogDetails);

module.exports = router;
