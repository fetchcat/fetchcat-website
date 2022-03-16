require("dotenv").config();

const express = require("express");
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/blogs", require("./routes/blog"));

app.listen(port, () => console.log(`> Server listening on port: ${port}`));
