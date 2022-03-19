const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Error Handler

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = {
    email: "",
    password: "",
  };

  if (err.code === 11000) {
    errors.email = "That email is already registered";
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

// Bcrypt

const bcrypt = require("bcrypt");
const saltRounds = 10;

// Token

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: maxAge });
};

// POST: /users/register

const postRegister = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    // res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.cookie("testCookie", "testValue", {
      maxAge: 60 * 60 * 1000,
    });
    res.status(201).json({ user: user._id, token });
    console.log(user.id, token);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }

  // try {
  //   const checkUser = await User.findOne({ email });
  //   console.log(checkUser);
  //   if (email && password) {
  //     const salt = await bcrypt.genSalt(saltRounds);
  //     const hashedPassword = await bcrypt.hash(password, salt);
  //     const user = await new User({ email, password: hashedPassword });
  //     await user.save();
  //     console.log(user);
  //     res.status(201).json({ message: "user created successfully" });
  //   } else {
  //     res.status(400).json({ message: "user must have email and password" });
  //   }
  // } catch (error) {
  //   handleErrors(error);
  //   res.status(500).json({ message: "Server error: user creation failed" });
  // }
};

// POST: /users/login

const postLogin = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  res.json({ message: "User logged in" });
};

module.exports = {
  postRegister,
  postLogin,
};
