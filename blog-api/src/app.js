const express = require("express");
const postRoutes = require("./routes/postRoutes");
const logger = require("./middleware/logger");

const app = express();

app.use(express.json());

app.use(logger);

app.use("/api/posts", postRoutes);

module.exports = app;