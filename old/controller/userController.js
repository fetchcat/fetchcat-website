const bcrypt = require("bcryptjs");
const User = require("../models/user");
const Blog = require("../models/blog");
const passport = require("passport");

// POST - Register New User

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    if (user) {
      res.redirect("/login", { message: "User created Succesfully" });
    } else {
      res.render("login", { user, title: "Login", current: "login" });
    }
  } catch {
    res.render("register", {
      user: new User({
        name: name,
        email: email,
        password: password,
      }),
      message: "User already exists",
      title: "Register",
      current: "register",
    });
  }
};

const loginUser = async (req, res) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  });
};

// const loginUser = async (req, res) => {
//   const { email, password, title, post } = req.body;

//   //check user email
//   const user = await User.findOne({ email });
//   if (user && (await bcrypt.compare(password, user.password))) {
//     console.log(req.body);
//     res.render("user/blog/create", {
//       _id: user.id,
//       name: user.name,
//       email: user.email,
//       token: generateToken(user._id),
//       title: "Create Blog",
//       current: "blog",
//       blog: new Blog(),
//     });
//   } else {
//     res.render("login", {
//       email,
//       password,
//       title,
//       current: "login",
//       message: "Invalid credentials",
//     });
//   }
// };

// GET - Get Logged in User

const getMe = async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);
  res.status(200).json({
    id: _id,
    name,
    email,
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
