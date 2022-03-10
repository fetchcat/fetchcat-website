// Passport and Bcrypt

const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

// User Model

const User = require("../models/user");

// Export Local Strategy

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        // match user
        const user = await User.findOne({ email: email });
        try {
          if (!user) {
            return done(null, false, {
              message: "That email is not registered",
            });
          }
          bcrypt.compare(password, user.password, (error, isMatch) => {
            if (error) throw error;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: "incorrect password" });
            }
          });
        } catch (error) {
          console.log(error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
