const formatUserProfile = (user) => ({
    username: user.login,
    name: user.name,
    bio: user.bio,
    avatarUrl: user.avatar_url,
    followers: user.followers,
    following: user.following,
    publicRepos: user.public_repos,
    profileUrl: user.html_url
});

module.exports = formatUserProfile;
