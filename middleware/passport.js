const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("../models/user");

const handleAuth = (req, res, next) => {
  const { email, password } = req.body;

  passport.use(
    new LocalStrategy(async function (email, password, done) {
      const user = await User.findOne({ email });
      try {
        if (user && (await bcrypt.compare(password, user.password))) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (error) {
        return done(error);
      }
    })
  );
};

module.exports = handleAuth;
