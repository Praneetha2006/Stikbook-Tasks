const githubService = require("../services/githubService");

const searchGithubUser = async (req, res) => {
    try {
        const { username } = req.params;

        const user = await githubService.searchUser(username);

        res.json(user);

    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
};

const fetchUserRepos = async (req, res) => {
    try {
        const { username } = req.params;

        const repos = await githubService.getUserRepos(username);

        res.json(repos);

    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
};

const fetchRepoDetails = async (req, res) => {
    try {
        const { username, repo } = req.params;

        const repoDetails =
            await githubService.getRepoDetails(username, repo);

        res.json(repoDetails);

    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
};

const fetchUserStats = async (req, res) => {
    try {
        const { username } = req.params;

        const stats =
            await githubService.getUserStats(username);

        res.json(stats);

    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    searchGithubUser,
    fetchUserRepos,
    fetchRepoDetails,
    fetchUserStats
}; 