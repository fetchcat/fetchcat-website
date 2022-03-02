const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// User model

const User = require("../models/user");

//Login
router.get("/login", (req, res) => {
  res.render("login", { title: "Login", current: "login" });
});

// Register
router.get("/register", (req, res) => {
  res.render("register", { title: "Register", current: "register" });
});

router.post("/register", async (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];
  // Req fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg: "Please fill in all fields" });
  }

  if (password !== password2) {
    errors.push({ msg: "Passwords do not match" });
  }

  // pass length
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
    // validation pass
    const user = await User.findOne({ email: email });
    try {
      if (user) {
        //user exists
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
        const newUser = new User({
          name,
          email,
          password,
        });
        // hash pw
        bcrypt.genSalt(10, (error, salt) => {
          bcrypt.hash(newUser.password, salt, (error, hash) => {
            if (error) throw error;
            // set password to hashed
            newUser.password = hash;

            try {
              newUser.save();
              res.redirect("/users/login");
            } catch (error) {
              console.log(error);
            }
          });
        });
      }
    } catch {}
  }
});

module.exports = router;
