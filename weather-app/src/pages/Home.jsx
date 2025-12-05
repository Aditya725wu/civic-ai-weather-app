import React from "react";
import { WiCloudy } from "react-icons/wi";
import { HiClock, HiDevicePhoneMobile } from "react-icons/hi2";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-page">

      {/* Cloud animation */}
      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>

      {/* Main content section */}
      <div className="home-container">
        <h1 className="home-title">Welcome to Weather App</h1>
        <p className="home-subtext">
          Check the real-time weather of any city in seconds!
        </p>

        {/* Features Section */}
        <div className="features">
          <div className="feature-card">
            <div className="icon-wrapper">
              <HiClock className="icon" />
            </div>
            <h3>Real-Time</h3>
            <p>Live weather data from OpenWeatherMap API.</p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <WiCloudy className="icon" />
            </div>
            <h3>Easy to Use</h3>
            <p>Simple search to find any city.</p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <HiDevicePhoneMobile className="icon" />
            </div>
            <h3>Responsive</h3>
            <p>Works perfectly on mobile & desktop devices.</p>
          </div>
        </div>
      </div>

    </div>
  );
};
export default Home