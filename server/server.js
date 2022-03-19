require("dotenv").config();
const port = process.env.PORT || 5000;

// --- DB --- //

const { connectDB } = require("./config/db");
connectDB();

// --- Express --- //

const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

const express = require("express");
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

// Express JSON Parsing

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router

app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

// --- Listen --- //

app.listen(port, () => {
  console.log(`> Server listening on port: ${port}...`);
});
