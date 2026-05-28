const express = require("express");

const {
    searchGithubUser,
    fetchUserRepos,
    fetchRepoDetails,
    fetchUserStats
} = require("../controller/githubController");

const router = express.Router();

router.get("/user/:username", searchGithubUser);

router.get("/repos/:username", fetchUserRepos);

router.get(
    "/repo/:username/:repo",
    fetchRepoDetails
);

router.get("/stats/:username", fetchUserStats);

module.exports = router;