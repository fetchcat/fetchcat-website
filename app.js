// --- ENV --- //

require("dotenv").config();
const port = process.env.PORT || 5001;

// --- MongoDB --- //

const connectDB = require("./config/db");
connectDB();

// --- Express --- //

const express = require("express");
const app = express();
app.use(express.static("public"));
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");

// --- Routers --- //

const pageRouter = require("./routes/page");
const blogRouter = require("./routes/blog");
const userRouter = require("./routes/user");

// --- EJS --- //

app.set("view engine", "ejs");

// --- Request Handling --- //

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// --- Express Session --- //

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

// --- Passport --- //

const passport = require("passport");
require("./middleware/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

// --- Connect Flash --- //

app.use(flash());

// --- Locals --- //

app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

// --- Routers --- //

app.use("/", pageRouter);
app.use("/blog", blogRouter);
app.use("/users", userRouter);

// --- 404 (Last Route) --- //

const { pageNotFound } = require("./middleware/pageNotFound");
app.use(pageNotFound);

// --- App Listen --- //

app.listen(port, () => console.log(`> App listening on port ${port}`));
