function savePostAndRedirect(path) {
  return async (req, res) => {
    let post = req.post;
    let current = req.current;
    const { title, description, entry, id } = req.body;
    post.title = title;
    post.description = description;
    post.entry = entry;
    post.id = id;
    try {
      post = await post.save();
      res.redirect(`${post.id}`);
    } catch (e) {
      res.render(`/blog/${path}`, {
        post,
        title: "Entry Failed. Please try again.",
        current,
      });
    }
  };
}

// Export recipe middleware

module.exports = { savePostAndRedirect };
