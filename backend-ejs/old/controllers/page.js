const Blog = require("../models/blog");

// GET - Home Page - PUBLIC

const getHomePage = (req, res) => {
  res.render("pages/index", {
    title: "Home",
    current: "home",
    isLoggedIn: req.isAuthenticated(),
  });
};

// GET - Blog Page (List latest 5 blogs from all users) - PUBLIC

const getBlogPage = async (req, res) => {
  const blogs = await Blog.find().sort({ updatedAt: -1 }).limit(5);
  res.render("pages/blog", {
    title: "Blog",
    current: "blog",
    blogs,
    isLoggedIn: req.isAuthenticated(),
  });
};

// GET - Portfolio Page - PUBLIC

const getPortfolioPage = (req, res) => {
  res.render("pages/porfolio", {
    title: "Porfolio",
    current: "portfolio",
    isLoggedIn: req.isAuthenticated(),
  });
};

// GET - About Page - PUBLIC

const getAboutPage = (req, res) => {
  res.render("pages/about", {
    title: "About",
    current: "about",
    isLoggedIn: req.isAuthenticated(),
  });
};

// GET - Contact Page - PUBLIC

const getContactPage = (req, res) => {
  res.render("pages/contact", {
    title: "Contact",
    current: "contact",
    isLoggedIn: req.isAuthenticated(),
  });
};

const readMore = async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug });
  res.render("pages/readMore", {
    title: "Read More",
    current: "blog",
    isLoggedIn: req.isAuthenticated(),
    blog,
  });
};

module.exports = {
  getHomePage,
  getBlogPage,
  getPortfolioPage,
  getAboutPage,
  getContactPage,
  readMore,
};
