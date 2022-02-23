// --- Config --- //

require("dotenv").config();
const port = process.env.PORT || 5001;

// --- Express --- //

const express = require("express");
const methodOverride = require("method-override");
const server = express();
const { errorHandler } = require("./middleware/error");
const { pageNotFound } = require("./middleware/404");
server.use(express.static("public"));

const blogRouter = require("./routes/blog");

// --- Mongoose --- //

const mongoose = require("mongoose");

// --- DB --- //

const connectDB = require("./config/db");
const { append } = require("express/lib/response");
connectDB();

// --- EJS --- //

server.set("view engine", "ejs");
server.use(express.urlencoded({ extended: false }));
server.use(methodOverride("_method"));

// --- Routes --- //

// Pages: Home (latest 5 posts) Blog About Contact
// Endpoints: /blog /blog/edit blog/create blog/delete

// Home

server.get("/", async (req, res) => {
  res.render("index", { title: "Home", current: "home" });
});

// Blog

server.use("/blog", blogRouter);

// Porfolio

server.get("/portfolio", (req, res) => {
  res.render("portfolio", {
    title: "Portfolio",
    current: "portfolio",
  });
});

// About

server.get("/about", (req, res) => {
  res.render("about", { title: "About", current: "about" });
});

// Contact

server.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact", current: "contact" });
});

// Login

server.get("/login", (req, res) => {
  res.render("login", { title: "Login", current: "login" });
});

server.use("/user", require("./routes/user"));

// --- Middleware --- //

// 404 (Last Route)
server.use(pageNotFound);

server.use(errorHandler);

// --- Listen --- //

server.listen(port, () => {
  console.log(`> Server listening on port: ${port}`);
});
