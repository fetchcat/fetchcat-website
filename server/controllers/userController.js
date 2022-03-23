const { handleErrors } = require("../middleware/handleErrors");

const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// JWT

const maxAge = 1 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: maxAge });
};

// POST: Register User /user/register

const postRegisterUser = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const user = await User.create({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });
    const token = createToken(user._id);
    // res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id, token: token });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

// POST: Login User /user/login

const postLoginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user == null) {
    return res.status(400).json({ message: "No user found" });
  }

  try {
    const result = await bcrypt.compare(password, user.password);

    if (result) {
      req.session.user = result;
      console.log(req.session);
      res.status(200).json({ message: "Logged In" });
    } else {
      res.status(400).json({ message: "incorrect password" });
    }
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports = { postRegisterUser, postLoginUser };
