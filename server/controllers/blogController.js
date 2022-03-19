const { handleErrors } = require("../middleware/handleErrors");

const Blog = require("../models/blogModel");

// GET - Latest 5 Blog Posts

// GET - One Post

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

module.exports = { postNewBlog };
