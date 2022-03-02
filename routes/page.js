const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");

router.get("/", (req, res) => {
  res.render("pages/index", { title: "Home", current: "home" });
});

router.get("/blog", async (req, res) => {
  const blogs = await Blog.find({});
  res.render("pages/blog", { title: "Blog", current: "blog", blogs });
});

router.get("/portfolio", (req, res) => {
  res.render("pages/porfolio", { title: "Porfolio", current: "portfolio" });
});

router.get("/about", (req, res) => {
  res.render("pages/about", { title: "About", current: "about" });
});

router.get("/contact", (req, res) => {
  res.render("pages/contact", { title: "Contact", current: "contact" });
});

router.get("/login", (req, res) => {
  res.render("pages/login", { title: "Login", current: "login" });
});

router.get("/register", (req, res) => {
  res.render("pages/register", { title: "Register", current: "register" });
});

module.exports = router;
