import React, { useEffect, useState } from "react";
import Tabs from "./components/tab";
import ProfileCard from "./components/profileCard";
import RepoCard from "./components/repoCard";
import FollowerCard from "./components/followerCard";
import "./components/profile.css";

function App() {
  const [username, setUsername] = useState("Praneetha2006");

  const [inputValue, setInputValue] = useState("Praneetha2006");

  const [activeTab, setActiveTab] =
    useState("Overview");

  const [profile, setProfile] = useState(null);

  const [repos, setRepos] = useState([]);

  const [followers, setFollowers] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  // Fetch Profile
  useEffect(() => {
    async function fetchProfile() {
      try {
        setLoading(true);

        setError("");

        const response = await fetch(
          `https://api.github.com/users/${username}`
        );

        if (!response.ok) {
          throw new Error("User not found");
        }

        const data = await response.json();

        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, [username]);

  // Fetch Repositories
  useEffect(() => {
    if (activeTab !== "Repositories") return;

    async function fetchRepos() {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );

        const data = await response.json();

        setRepos(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, [username, activeTab]);

  // Fetch Followers
  useEffect(() => {
    if (activeTab !== "Followers") return;

    async function fetchFollowers() {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.github.com/users/${username}/followers`
        );

        const data = await response.json();

        setFollowers(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchFollowers();
  }, [username, activeTab]);

  const handleSearch = () => {
    setUsername(inputValue);
  };

  return (
    <div className="app">
      <h1>GitHub Profile Viewer</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={inputValue}
          onChange={(e) =>
            setInputValue(e.target.value)
          }
        />

        <button onClick={handleSearch}>
          Search
        </button>
      </div>

      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {error && (
        <h2 className="error">{error}</h2>
      )}

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {activeTab === "Overview" &&
            profile && (
              <ProfileCard profile={profile} />
            )}

          {activeTab === "Repositories" && (
            <div className="repo-grid">
              {repos.map((repo) => (
                <RepoCard
                  key={repo.id}
                  repo={repo}
                />
              ))}
            </div>
          )}

          {activeTab === "Followers" && (
            <div className="followers-grid">
              {followers.map((follower) => (
                <FollowerCard
                  key={follower.id}
                  follower={follower}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;