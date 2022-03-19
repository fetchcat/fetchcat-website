const pageNotFound = (req, res) => {
  res
    .status(404)
    .render("pages/404", {
      title: "Page Not Found",
      current: "404",
      isLoggedIn: req.isAuthenticated(),
    });
};

module.exports = {
  pageNotFound,
};
