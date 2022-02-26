const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const Blog = require("../models/blog");

const asyncHandler = require("express-async-handler");

// POST - Register New User

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  // Hash Password

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password, title, post } = req.body;

  //check user email
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    console.log(req.body);
    res.render("user/blog/create", {
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      title: "Create Blog",
      current: "blog",
      blog: new Blog(),
    });
    // res.status(200).render("blog", {
    //   _id: user.id,
    //   name: user.name,
    //   email: user.email,
    //   token: generateToken(user._id),
    //   title: "Create Blog",
    //   current: "blog",
    //   post,
    // });
    // res.json({
    //   _id: user.id,
    //   name: user.name,
    //   email: user.email,
    //   token: generateToken(user._id),
    // });
  } else {
    res.render("login", {
      email,
      password,
      title,
      current: "login",
      message: "Invalid credentials",
    });
  }
});

// GET - Get Logged in User

const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);
  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

// Generate JWT Token

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
