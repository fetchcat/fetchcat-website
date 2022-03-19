// GET: All Blogs | ROUTE: /api/blogs | AUTH:

const getBlogs = (req, res) => {
  res.status(200).json({ message: "Get Blogs" });
};

// POST: Set Blog | ROUTE: /api/blogs | AUTH:

const setBlog = (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Set Blog" });
};

// PUT: Update Blog by ID | ROUTE: /api/blogs/:id | AUTH:

const updateBlog = (req, res) => {
  res.status(200).json({ message: `Updated Blog ${req.params.id}` });
};

// DELETE: Delete Blog by ID | ROUTE: /api/blogs/:id | AUTH:

const deleteBlog = (req, res) => {
  res.status(200).json({ message: `Deleted Blog ${req.params.id}` });
};

module.exports = {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
};
