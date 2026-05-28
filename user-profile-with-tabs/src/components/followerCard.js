import React from "react";

function FollowerCard({ follower }) {
  return (
    <div className="follower-card">
      <img
        src={follower.avatar_url}
        alt={follower.login}
      />

      <h3>{follower.login}</h3>
    </div>
  );
}

export default FollowerCard;