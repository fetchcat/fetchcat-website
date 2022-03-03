// Express

const express = require("express");
const router = express.Router();

const { ensureAuthenticated } = require("../middleware/auth");

// Blog Schema

const Blog = require("../models/blog");
const User = require("../models/user");

// Routes

router.delete("/:id", async (req, res) => {
  const post = await Blog.findById(req.params.id);
  try {
    const postAuthor = post.user._id.toString();
    const sessionUser = req.session.passport.user;
    if (postAuthor === sessionUser) {
      post.delete();
    } else {
      req.flash("error_msg", "You are not authorized to delete that resource");
      res.redirect("/users/dashboard");
    }
    req.flash("success_msg", "Post deleted successfully");
    res.redirect("/users/dashboard");
  } catch {
    req.flash("error_msg", "Request failed");
    res.redirect("/users/dashboard");
  }
});
router.post("/", async (req, res) => {
  const { title, description, entry } = req.body;
  const loggedInUser = req.session.passport.user;

  const { name, id } = await User.findById(loggedInUser);

  const blog = new Blog({
    title,
    description,
    entry,
    author: name,
    user: id,
  });
  try {
    console.log(blog);
    await blog.save();
    res.redirect("/dashboard");
  } catch (error) {
    res.redirect("/dashboard");
  }
});

router.put("/:id", async (req, res) => {
  const loggedInUser = req.session.passport.user;
  let blog = await Blog.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    description: req.body.description,
    entry: req.body.entry,
  });
  const blogAuthor = blog.user.toString();
  try {
    if (loggedInUser === blogAuthor) {
      blog = await blog.save();
      req.flash("success_msg", "Post updated successfully");
      res.redirect("/users/dashboard");
    } else {
      req.flash("error_msg", "You are not authorized to edit this resource");
    }
  } catch (error) {
    console.log(error);
    req.flash("error_msg", "Updating post failed");
    res.redirect("/users/dashboard");
  }
});

router.get("/:id", ensureAuthenticated, async (req, res) => {
  const { id, name, email, createdAt, updatedAt } = req.user;
  const blog = await Blog.findById(req.params.id);
  try {
    res.render("users/edit", {
      title: "Edit Blog Post",
      current: "register",
      id,
      name,
      email,
      createdAt,
      updatedAt,
      blog,
      isLoggedIn: req.isAuthenticated(),
    });
  } catch {
    req.flash("error_msg", "Cannot edit post");
    res.redirect("/dashboard");
  }
});

module.exports = router;
