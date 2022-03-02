const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const User = require("../models/user");

const passport = require("passport");
const LocalStrategy = require("passport-local");

passport.use(
  new LocalStrategy({ usernameField: "email" }, async function (
    username,
    password,
    done
  ) {
    const user = await User.findOne({ username });
    console.log(user);
    if (!user) {
      return done(null, false);
    }
    if (user && (await bcrypt.compare(password, user.password))) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureMessage: true,
  })
);

module.exports = router;
