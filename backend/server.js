require("dotenv").config();

const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV;

const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const emailRoutes = require("./routes/emailRoutes");

// --- DB --- //

const { connectDB } = require("./config/db");
connectDB();

// --- Express, Listen, Parse, CORS --- //

const app = express();

app.listen(port, () => {
  console.log(`> Server listening on port: ${port}...`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (env === "development") {
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );
}

// --- Routes --- //

app.use("/user", userRoutes);
app.use("/blog", blogRoutes);
app.use("/send", emailRoutes);
