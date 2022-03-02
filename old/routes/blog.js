// Express

const express = require("express");
const router = express.Router();

// Blog Schema

const Blog = require("../models/blog");

// Middleware

const { savePostAndRedirect } = require("../middleware/blog");

// Controllers

const {
  getAllBlogs,
  getBlogById,
  deleteBlogById,
  postNewBlog,
} = require("../controller/blogController");

// Routes

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.delete("/:id", deleteBlogById);
router.post("/", postNewBlog);

router.put(
  "/:id",
  async (req, res, next) => {
    req.blog = await Blog.findById(req.params.id);
    next();
  },
  savePostAndRedirect("edit")
);

module.exports = router;

// router.get("/create", protect, (req, res) => {
//   res.render("blog/create", {
//     title: "Create Blog",
//     blog: new Blog(),
//     current: "blog",
//   });
// });

// router.get("/edit/:id", protect, async (req, res) => {
//   const blog = await Blog.findById(req.params.id);
//   res.render("blog/edit", { blog, title: "Edit Entry", current: "blog" });
// });
