const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");

// Home Page

router.get("/", (req, res) => {
  res.render("pages/index", {
    title: "Home",
    current: "home",
    isLoggedIn: req.isAuthenticated(),
  });
});

// Blog Page (shows recent blogs from all users)

router.get("/blog", async (req, res) => {
  const blogs = await Blog.find().sort({ updatedAt: -1 }).limit(5);
  res.render("pages/blog", {
    title: "Blog",
    current: "blog",
    blogs,
    isLoggedIn: req.isAuthenticated(),
  });
});

// Portfolio Page

router.get("/portfolio", (req, res) => {
  res.render("pages/porfolio", {
    title: "Porfolio",
    current: "portfolio",
    isLoggedIn: req.isAuthenticated(),
  });
});

// About Page

router.get("/about", (req, res) => {
  res.render("pages/about", {
    title: "About",
    current: "about",
    isLoggedIn: req.isAuthenticated(),
  });
});

// Contact Page

router.get("/contact", (req, res) => {
  res.render("pages/contact", {
    title: "Contact",
    current: "contact",
    isLoggedIn: req.isAuthenticated(),
  });
});

module.exports = router;
