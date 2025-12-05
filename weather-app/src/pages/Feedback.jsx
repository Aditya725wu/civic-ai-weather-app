import React, { useState, useEffect } from "react";
import "./Feedback.css";
import { feedbackAPI } from "../api/api";

export const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Load feedback from API
  useEffect(() => {
    const fetchFeedback = async () => {
      setLoading(true);
      try {
        const response = await feedbackAPI.getAll();
        setFeedbackList(response.feedback || []);
      } catch (err) {
        // Fallback to localStorage if API fails
        const savedFeedback = JSON.parse(localStorage.getItem("feedbackList")) || [];
        setFeedbackList(savedFeedback);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("All fields are required!");
      return;
    }

    setSubmitting(true);

    try {
      await feedbackAPI.submit(name, email, message);
      
      // Add to local list
      const newFeedback = { 
        name, 
        email, 
        message, 
        date: new Date().toLocaleString() 
      };
      setFeedbackList([newFeedback, ...feedbackList]);

      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError(err.message || "Failed to submit feedback. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="feedback-page">
      <div className="feedback-box">
        <h2>User Feedback</h2>
        <p>Your opinions help us improve!</p>

        {error && <div className="feedback-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required
            value={name} onChange={(e) => setName(e.target.value)} />

          <input type="email" placeholder="Email" required
            value={email} onChange={(e) => setEmail(e.target.value)} />

          <textarea placeholder="Write your feedback..." required rows="4"
            value={message} onChange={(e) => setMessage(e.target.value)} />

          <button className="submit-btn" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      {/* Show feedback list */}
      {loading ? (
        <div className="feedback-list">
          <h3>Submitted Feedback</h3>
          <div className="feedback-loading">Loading feedback...</div>
        </div>
      ) : feedbackList.length > 0 ? (
        <div className="feedback-list">
          <h3>Submitted Feedback</h3>
          {feedbackList.map((fb, index) => (
            <div key={fb.id || index} className="feedback-card">
              <strong>{fb.name}</strong> <span>({fb.email})</span>
              <p>{fb.message}</p>
              <small>{fb.date || fb.created_at}</small>
            </div>
          ))}
        </div>
      ) : (
        <div className="feedback-list">
          <h3>Submitted Feedback</h3>
          <div className="feedback-empty">No feedback submitted yet.</div>
        </div>
      )}
    </div>
  );
};
