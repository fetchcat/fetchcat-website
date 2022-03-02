// --- ENV --- //

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const port = process.env.PORT || 5001;

// --- MongoDB --- //

const connectDB = require("./config/db");
connectDB();

// --- Express --- //

const express = require("express");
const app = express();
app.use(express.static("public"));
const methodOverride = require("method-override");

// --- Routes --- //

const pageRouter = require("./routes/page");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");

// --- EJS --- //

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// --- Passport --- //

const passport = require("passport");
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// --- Routers --- //

app.use("/", pageRouter);
// app.use("/auth", authRouter);
app.use("/users", userRouter);

// --- App Listen --- //

app.listen(port, () => console.log(`> App listening on port ${port}`));
