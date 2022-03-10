// Models

const Blog = require("../models/blog");
const User = require("../models/user");

// DELETE - Blog by ID - AUTH REQUIRED

const deleteBlogById = async (req, res) => {
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
};

// POST - New Blog entry - AUTH REQUIRED

const postNewBlog = async (req, res) => {
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
    await blog.save();
    res.redirect("/users/dashboard");
  } catch {
    req.flash("error_msg", "Could not save post");
    res.redirect("/users/dashboard");
  }
};

// PUT - Update Blog - AUTH REQUIRED

const updateBlog = async (req, res) => {
  const loggedInUser = req.session.passport.user;
  let blog = await Blog.findOneAndUpdate(
    { slug: req.params.slug },
    {
      title: req.body.title,
      description: req.body.description,
      entry: req.body.entry,
    }
  );
  const blogAuthor = await blog.user.toString();

  try {
    // Make sure you can only delete your own posts
    if (loggedInUser === blogAuthor) {
      blog = await blog.save();
      req.flash("success_msg", "Post updated successfully");
      res.redirect("/users/dashboard");
    } else {
      req.flash("error_msg", "You are not authorized to edit this resource");
    }
  } catch {
    req.flash("error_msg", "Updating post failed");
    res.redirect("/users/dashboard");
  }
};

// GET - Blog by ID, and populate form for editing - AUTH REQUIRED

const editBlog = async (req, res) => {
  const { id, name, email, createdAt, updatedAt } = req.user;
  const blog = await Blog.findOne({ slug: req.params.slug });
  try {
    res.render("users/editPost", {
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
};

module.exports = {
  deleteBlogById,
  postNewBlog,
  updateBlog,
  editBlog,
};
