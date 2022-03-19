const { handleErrors } = require("../middleware/handleErrors");

const User = require("../models/userModel");
const bcrypt = require("bcrypt");

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

    res.status(201).json(user);
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
