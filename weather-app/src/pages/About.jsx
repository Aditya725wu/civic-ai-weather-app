import React from "react";
import { HiDocumentText, HiDevicePhoneMobile, HiBolt, HiGlobeAlt } from "react-icons/hi2";
import { WiDaySunny } from "react-icons/wi";
import "./About.css"; // custom css

export function About() {
  return (
    
      <div className="container">
        {/* Hero Section */}
        <div className="text-center hero-section">
          <h1 className="display-4 fw-bold">
            About <span className="highlight">Civic AI</span>
          </h1>
          <p className="lead text-muted">
            Smart solutions for better cities. Powered by AI, built for citizens.
          </p>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h2 className="fw-bold text-center mb-5">
            <HiBolt className="inline-icon" /> What We Offer
          </h2>
          <div className="row text-center">
            
            <div className="col-md-3 mb-4">
              <div className="feature-card">
                <div className="icon"><HiDocumentText /></div>
                <h5 className="card-title">Report Issues</h5>
                <p className="card-text">
                  Submit civic complaints with ease and track progress online.
                </p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="feature-card">
                <div className="icon"><WiDaySunny /></div>
                <h5 className="card-title">Weather</h5>
                <p className="card-text">
                  Stay updated with real-time local weather information.
                </p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="feature-card">
                <div className="icon"><HiGlobeAlt /></div>
                <h5 className="card-title">Air Quality</h5>
                <p className="card-text">
                  Monitor the Air Quality Index (AQI) in your city anytime.
                </p>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <div className="feature-card">
                <div className="icon"><HiDevicePhoneMobile /></div>
                <h5 className="card-title">User Friendly</h5>
                <p className="card-text">
                  Clean, responsive design for both desktop and mobile.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center footer-section">
          <h4 className="footer-text">Together, we can build smarter cities!</h4>
          <p className="text-muted">
            Civic AI is more than just an app — it's a movement to make our
            communities better, cleaner, and smarter.
          </p>
        </div>
      </div>

  );
}
