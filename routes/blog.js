// Express

const express = require("express");
const router = express.Router();

// Middleware

const { ensureAuthenticated } = require("../middleware/auth");

// Blog Controller

const {
  deleteBlogById,
  postNewBlog,
  updateBlog,
  editBlog,
} = require("../controllers/blog");

// Blog Routes

router.route("/").post(postNewBlog);

router.route("/:slug").get(ensureAuthenticated, editBlog).put(updateBlog);

router.route("/:id").delete(deleteBlogById);

module.exports = router;
