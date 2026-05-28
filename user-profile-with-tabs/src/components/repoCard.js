import React from "react";

function RepoCard({ repo }) {
  return (
    <div className="repo-card">
      <h3>{repo.name}</h3>

      <p>
        ⭐ Stars: {repo.stargazers_count}
      </p>

      <p>
        Language: {repo.language}
      </p>
    </div>
  );
}

export default RepoCard;