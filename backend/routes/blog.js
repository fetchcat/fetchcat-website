const express = require("express");
const router = express.Router();

const {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog");

router.route("/").get(getBlogs).post(setBlog);
router.route("/:id").put(updateBlog).delete(deleteBlog);

module.exports = router;
