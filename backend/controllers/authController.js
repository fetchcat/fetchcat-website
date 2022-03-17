const User = require("../models/User");

// Bcrypt

const bcrypt = require("bcrypt");
const saltRounds = 10;

// POST: /users/register

const postRegister = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });
    console.log(checkUser);
    if (email && password) {
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await new User({ email, password: hashedPassword });
      await user.save();
      console.log(user);
      res.status(201).json({ message: "user created successfully" });
    } else {
      res.status(400).json({ message: "user must have email and password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error: user creation failed" });
  }
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
