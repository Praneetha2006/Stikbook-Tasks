const express = require("express");
const githubRoutes = require("./src/routes/githubRoutes");

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/api/github", githubRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});