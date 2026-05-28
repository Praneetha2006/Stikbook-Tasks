const formatUserProfile = require("../utils/formatProfile");

const BASE_URL = "https://api.github.com/users";
const REPOS_BASE_URL = "https://api.github.com/repos";

const searchUser = async (username) => {
    const response = await fetch(`${BASE_URL}/${username}`);

    if (!response.ok) {
        throw new Error("GitHub user not found");
    }

    const data = await response.json();

    return formatUserProfile(data);
};

const getUserRepos = async (username) => {
    const response = await fetch(`${BASE_URL}/${username}/repos`);

    if (!response.ok) {
        throw new Error("Repositories not found");
    }

    const repos = await response.json();

    return repos.map(repo => ({
        name: repo.name,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        repoUrl: repo.html_url
    }));
};

const getRepoDetails = async (username, repoName) => {
    const response = await fetch(
        `${REPOS_BASE_URL}/${username}/${repoName}`
    );

    if (!response.ok) {
        throw new Error("Repository not found");
    }

    const repo = await response.json();

    return {
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        watchers: repo.watchers_count,
        forks: repo.forks_count,
        language: repo.language,
        repoUrl: repo.html_url
    };
};

const getUserStats = async (username) => {
    const response = await fetch(`${BASE_URL}/${username}/repos`);

    if (!response.ok) {
        throw new Error("Unable to fetch stats");
    }

    const repos = await response.json();

    const totalRepos = repos.length;

    const totalStars = repos.reduce(
        (sum, repo) => sum + repo.stargazers_count,
        0
    );

    const totalForks = repos.reduce(
        (sum, repo) => sum + repo.forks_count,
        0
    );

    return {
        totalRepos,
        totalStars,
        totalForks
    };
};

module.exports = {
    searchUser,
    getUserRepos,
    getRepoDetails,
    getUserStats
};