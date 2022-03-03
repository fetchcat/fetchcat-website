const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");

// User model

const User = require("../models/user");
const Blog = require("../models/blog");

// Middleware

const { ensureAuthenticated } = require("../middleware/auth");

// GET - Login Page

router.get("/login", (req, res) => {
  res.render("users/login", {
    title: "Login",
    current: "login",
    isLoggedIn: req.isAuthenticated(),
  });
});

// GET - Register Page

router.get("/register", (req, res) => {
  res.render("users/register", {
    title: "Register",
    current: "register",
    isLoggedIn: req.isAuthenticated(),
  });
});

// POST - Register new user

router.post("register", async (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];
  // Required fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg: "Please fill in all fields" });
  }
  // Compare passwords
  if (password !== password2) {
    errors.push({ msg: "Passwords do not match" });
  }
  // Password length has to be 6 chars or more
  if (password.length < 6) {
    errors.push({ msg: "Password must be at least 6 characters" });
  }
  if (errors.length > 0) {
    res.render("register", {
      errors,
      name,
      email,
      password,
      password2,
      title: "Register",
      current: "register",
    });
  } else {
    // Check if user exists
    const user = await User.findOne({ email: email });
    try {
      if (user) {
        // Error if User exists, push back to user to edit
        errors.push({ msg: "User already exists with that email" });
        res.render("register", {
          errors,
          name,
          email,
          password,
          password2,
          title: "Register",
          current: "register",
        });
      } else {
        // Create New User
        const newUser = new User({
          name,
          email,
          password,
        });
        // Create hash for password
        bcrypt.genSalt(10, (error, salt) => {
          bcrypt.hash(newUser.password, salt, (error, hash) => {
            if (error) {
              req.flash("error_msg", "Error encrypting password");
              res.redirect("/users/register");
            }
            // Hash password
            newUser.password = hash;
            try {
              newUser.save();
              req.flash("success_msg", "You are now registered and can log in");
              res.redirect("/users/login");
            } catch {
              req.flash("error_msg", "Error creating user");
              res.redirect("/users/login");
            }
          });
        });
      }
    } catch {
      req.flash("error_msg", "User registration failed.");
      res.redirect("/users/register");
    }
  }
});

// GET - User dashboard

router.get("/dashboard", ensureAuthenticated, async (req, res) => {
  const { id, name, email, createdAt, updatedAt } = req.user;
  const blogs = await Blog.find({ user: id }).sort({ updatedAt: -1 });
  try {
    res.render("users/dashboard", {
      title: "Dashboard",
      current: "register",
      id,
      name,
      email,
      createdAt,
      updatedAt,
      isLoggedIn: req.isAuthenticated(),
      blogs,
    });
  } catch (error) {
    console.log(error);
  }
});

// POST - Login

router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/users/dashboard",
    failureRedirect: "/users/login",
    failureFlash: true,
  })(req, res, next);
});

// GET - Logout

router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "You are logged out");
  res.redirect("/users/login");
});

module.exports = router;
