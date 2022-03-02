// --- Config --- //

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const port = process.env.PORT || 5001;

// --- Express --- //

const express = require("express");
const methodOverride = require("method-override");
const server = express();
const { errorHandler, pageNotFound } = require("./middleware/error");
server.use(express.static("public"));

const blogRouter = require("./routes/blog");
const authRouter = require("./routes/auth");

// --- DB --- //

const connectDB = require("./config/db");
const User = require("./models/user");

connectDB();

// --- EJS --- //

server.set("view engine", "ejs");
server.use(express.urlencoded({ extended: true }));
server.use(methodOverride("_method"));

// --- Routes --- //

// Home

server.get("/", async (req, res) => {
  res.render("index", { title: "Home", current: "home" });
  const me = await User.findById({ _id: "621571c2245e80b0a0cf4e9c" });
});

// Blog

server.use("/blog/", blogRouter);

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

// Register

server.get("/register", (req, res) => {
  const user = new User();
  res.render("register", {
    title: "Register",
    current: "login",
    message: "",
    user: user,
  });
});

// Login

server.get("/login", (req, res) => {
  res.render("login", {
    title: "Login",
    current: "login",
    message: "",
    user: new User(),
  });
});

// User

server.use("/user", require("./routes/user"));

// --- Middleware --- //

// 404 (Last Route)
server.use(pageNotFound);

server.use(errorHandler);

// --- Listen --- //

server.listen(port, () => {
  console.log(`> Server listening on port: ${port}`);
});
