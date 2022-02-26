const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

const pageNotFound = (req, res) => {
  res.status(404).render("404", { title: "Page Not Found", current: "404" });
};

module.exports = {
  errorHandler,
  pageNotFound,
};
