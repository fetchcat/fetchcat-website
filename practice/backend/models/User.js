const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minLength: [6, "minimum password length is 6 chars"],
  },
});

// UserSchema.post("save", function (doc, next) {
//   console.log("new user was created and saved", doc);
//   next();
// });

UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
