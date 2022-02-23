// Express

const express = require("express");
const router = express.Router();

// Mongoose

const Post = require("../models/post");

// Middleware

const { savePostAndRedirect } = require("../middleware/blog");
const { protect } = require("../middleware/auth");

// Routes

router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.render("blog", { title: "Blog", posts, current: "blog" });
});

router.get("/create", protect, (req, res) => {
  res.render("blog/create", {
    title: "Create Blog",
    post: new Post(),
    current: "blog",
  });
});

router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("blog/show", { post, title: "Show Entry", current: "blog" });
});

router.get("/edit/:id", protect, async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("blog/edit", { post, title: "Edit Entry", current: "blog" });
});

router.post(
  "/",
  async (req, res, next) => {
    req.post = new Post();
    next();
  },
  savePostAndRedirect("create")
);

router.put(
  "/:id",
  async (req, res, next) => {
    req.post = await Post.findById(req.params.id);
    next();
  },
  savePostAndRedirect("edit")
);

router.delete("/:id", protect, async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect("/blog");
});

module.exports = router;
