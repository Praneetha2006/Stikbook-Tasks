import React, { useState } from "react";
import "./userProfile.css";

function UserProfile({
  id,
  name,
  jobTitle,
  company,
  email,
  phone,
  onDelete,
}) {
  const [showMore, setShowMore] = useState(false);

  const toggleDetails = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="profile-card">
      <h2>{name}</h2>

      <p className="job-title">{jobTitle}</p>

      <p className="company">{company}</p>

      {showMore && (
        <div className="extra-details">
          <p>
            <strong>Email:</strong> {email}
          </p>

          <p>
            <strong>Phone:</strong> {phone}
          </p>
        </div>
      )}

      <div className="button-group">
        <button className="show-btn" onClick={toggleDetails}>
          {showMore ? "Show Less" : "Show More"}
        </button>

        <button className="delete-btn" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserProfile;