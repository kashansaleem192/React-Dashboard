import React, { useState } from "react";
import "../Github-User_Finder/Github-user.css"; 

const GithubUserFinder = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const getData = async () => {
    if (!username) return;

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();

      if (data.message === "Not Found") {
        setError("User not found. Please enter a valid username.");
        setUserData(null);
      } else {
        setError("");
        setUserData(data);
      }
    } catch (err) {
      setError("Something went wrong. Try again later.");
    }
  };

  return (
    <>
 <div className="heading-box">
         <img
        src="/github-logo.png"
        alt="GitHub"
        className="github-img"
      />
<h1>Github-User-Finder</h1>
 </div>
      <div className="my-container">
        <div className="input-box" style={{ textAlign: "center" }}>
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: "8px",
              width: "70%",
              borderRadius: "6px",
              border: "none",
              marginBottom: "10px",
            }}
          />
          <button
            onClick={getData}
            style={{
              padding: "8px 12px",
              border: "none",
              background: "#3E96F4",
              color: "#fff",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>

        {error && (
          <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
            {error}
          </p>
        )}

        {userData && (
          <div className="user-details">
            <div className="img-box">
              <img src={userData.avatar_url} alt="avatar" />
            </div>
            <h3 className="name">{userData.name}</h3>
            <h6 className="username">{userData.login}</h6>
            <span className="join-date">
              Joined: {new Date(userData.created_at).toDateString()}
            </span>
            <p className="bio">{userData.bio || "This profile has no bio"}</p>

            <div className="userprofile">
              <div>
                <h2>{userData.public_repos}</h2>
                <span>Repos</span>
              </div>
              <div>
                <h2>{userData.followers}</h2>
                <span>Followers</span>
              </div>
              <div>
                <h2>{userData.following}</h2>
                <span>Following</span>
              </div>
            </div>

            <div className="user-other-details">
              <p>
                <i className="fa-solid fa-building"></i>{" "}
                {userData.company || "No Company"}
              </p>
              <p>
                <i className="fa-solid fa-location-dot"></i>{" "}
                {userData.location || "No Location"}
              </p>
              <p>
                <i className="fa-solid fa-link"></i>{" "}
                {userData.blog ? (
                  <a
                    href={userData.blog}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#3E96F4" }}
                  >
                    Website
                  </a>
                ) : (
                  "No Website"
                )}
              </p>
              <p>
                <i className="fa-brands fa-x-twitter"></i>{" "}
                {userData.twitter_username ? (
                  <a
                    href={`https://twitter.com/${userData.twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#3E96F4" }}
                  >
                    @{userData.twitter_username}
                  </a>
                ) : (
                  "No Twitter"
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GithubUserFinder;
