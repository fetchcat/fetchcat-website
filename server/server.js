require("dotenv").config();
const port = process.env.PORT || 5000;

// --- DB --- //

const { connectDB } = require("./config/db");
connectDB();

// --- Express --- //

const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const emailRoutes = require("./routes/emailRoutes");

const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

// --- MiddleWare --- //

// CORS

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
  })
);

// Express Parsing

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Router

app.use("/user", userRoutes);
app.use("/blog", blogRoutes);
app.use("/send", emailRoutes);

// --- Listen --- //

app.listen(port, () => {
  console.log(`> Server listening on port: ${port}...`);
});
