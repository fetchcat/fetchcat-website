const { handleErrors } = require("../middleware/handleErrors");

const Blog = require("../models/blogModel");

// GET - and Sort Latest 5 Blog Posts

const getLatestBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ updatedAt: -1 }).limit(5);
    res.status(201).send(blogs);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error establishing database connection", error });
  }
};

// GET - One Blog Details

const getBlogDetails = async (req, res) => {
  try {
    const slug = req.params.slug;
    const blog = await Blog.findOne({ slug });
    res.status(200).json(blog);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error establishing database connection", error });
  }
};

// POST - Add new blog entry

const postNewBlog = async (req, res) => {
  const { title, description, entry, user, firstName, lastName } = req.body;

  try {
    const newBlog = await Blog.create({
      title,
      description,
      entry,
      user,
      firstName,
      lastName,
    });
    newBlog.save();
    res.status(201).json(newBlog);
  } catch {
    handleErrors(errors);
    res.status(400).json({ errors });
  }
};

// PUT - Update Blog Entry

// DELETE - Delete blog by ID

module.exports = { postNewBlog, getLatestBlogs, getBlogDetails };
