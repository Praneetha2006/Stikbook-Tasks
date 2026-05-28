import React from "react";

function ProfileCard({ profile }) {
  return (
    <div className="profile-card">
      <img
        src={profile.avatar_url}
        alt={profile.login}
      />

      <h2>{profile.name}</h2>

      <p>{profile.bio}</p>

      <div className="stats">
        <p>
          Followers: {profile.followers}
        </p>

        <p>
          Repositories: {profile.public_repos}
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;