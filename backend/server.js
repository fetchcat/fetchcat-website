require("dotenv").config();

const express = require("express");
const port = process.env.PORT || 5000;

const connectDB = require("./config/db");
connectDB();

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/users", require("./routes/authRoutes"));

app.listen(port, () => console.log(`> Server listening on port: ${port}`));
