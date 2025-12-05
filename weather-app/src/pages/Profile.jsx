import React, { useState, useEffect } from "react";
import "./Profile.css";
import { authAPI } from "../api/api";

export const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await authAPI.getUser();
        if (response.user) {
          setName(response.user.fullname || "");
          setEmail(response.user.email || "");
          // Update localStorage
          localStorage.setItem("user", JSON.stringify({
            name: response.user.fullname,
            email: response.user.email,
            id: response.user.id
          }));
        }
      } catch (err) {
        // Fallback to localStorage if API fails
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
          setName(storedUser.name || "");
          setEmail(storedUser.email || "");
        }
      } finally {
        setFetching(false);
      }
    };

    fetchUserData();
  }, []);

  const handleSave = async () => {
    if (!name.trim()) {
      setMessage("Name cannot be empty!");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    setLoading(true);

    try {
      const response = await authAPI.updateUser(name);
      
      // Update localStorage
      localStorage.setItem("user", JSON.stringify({
        name: response.user.fullname,
        email: response.user.email,
        id: response.user.id
      }));

      setMessage("Profile updated successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      setMessage(err.message || "Error updating profile. Please try again.");
      setTimeout(() => setMessage(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="profile-page">
        <div className="profile-card">
          <div className="profile-loading">Loading profile...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            {name ? name.charAt(0).toUpperCase() : "U"}
          </div>
          <h2>My Profile</h2>
        </div>

        {message && (
          <div className={`profile-message ${message.includes("successfully") ? "success" : "error"}`}>
            {message}
          </div>
        )}

        <div className="profile-info">
          <div className="info-item">
            <label>Email</label>
            <div className="email-display">{email || "Not set"}</div>
          </div>

          <div className="info-item">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
            />
          </div>

          <button
            className="save-btn"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};
