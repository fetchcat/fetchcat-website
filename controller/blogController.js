const Blog = require("../models/blog");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const { errorHandler } = require("../middleware/error");

// GET - All Blogs

const getAllBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();
  res.render("blog", { blogs, title: "Latest Blogs", current: "blog" });
});

// GET - /:id

const getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render("blog/show", { blog, title: "Show Entry", current: "blog" });
});

// DELETE - /:id

const deleteBlogById = asyncHandler(async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.redirect("/blog");
});

// POST - /

const postNewBlog = asyncHandler(async (req, res) => {
  const { user, title, description, entry } = req.body;
  const me = await User.findById({ _id: "621571c2245e80b0a0cf4e9c" });
  if (me) {
    const blog = await Blog.create({
      user: me._id,
      author: me.name,
      title,
      description,
      entry,
    });
    res.status(200).json(blog);
  }
});

module.exports = {
  getAllBlogs,
  getBlogById,
  deleteBlogById,
  postNewBlog,
};
