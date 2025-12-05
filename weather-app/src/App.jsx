import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, NavLink, useLocation } from "react-router-dom";
import { HiChatBubbleLeftRight, HiMoon, HiSun, HiArrowRightOnRectangle, HiBars3, HiXMark } from "react-icons/hi2";
import ChatBot from "./pages/ChatBot";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import  Home from "./pages/Home";
import { About } from "./pages/About";
import { Weather } from "./pages/Weather";
import { AirQuality } from "./pages/AirQuality";
import ProtectedRoute from "./components/ProtectedRoute";
import {Feedback}  from "./pages/Feedback";
import { Profile } from "./pages/Profile";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Hide Navbar on Login & Signup pages
  const noNavbar =
    location.pathname === "/" || location.pathname === "/signup";
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  const [showChat, setShowChat] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {!noNavbar && (
        <>
          <button className="chatbot-btn" onClick={() => setShowChat(!showChat)} aria-label="Open chat">
            <HiChatBubbleLeftRight />
          </button>
          {showChat && <ChatBot closeChat={() => setShowChat(false)} />}

          <nav className="navbar">
            <div className="logo">
              <span className="logo-icon">Civic</span> AI
            </div>

            <ul className={`nav-links ${mobileMenuOpen ? "mobile-open" : ""}`}>
              <li><NavLink to="/home" onClick={() => setMobileMenuOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</NavLink></li>
              <li><NavLink to="/weather" onClick={() => setMobileMenuOpen(false)}>Weather</NavLink></li>
              <li><NavLink to="/aqi" onClick={() => setMobileMenuOpen(false)}>AQI</NavLink></li>
              <li><NavLink to="/feedback" onClick={() => setMobileMenuOpen(false)}>Feedback</NavLink></li>
              <li><NavLink to="/profile" onClick={() => setMobileMenuOpen(false)}>Profile</NavLink></li>
            </ul>

            <div className="nav-right">
              <button className="nav-toggle" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle dark mode">
                {darkMode ? <><HiSun /> Light</> : <><HiMoon /> Dark</>}
              </button>
              <button className="logout-btn" onClick={handleLogout} aria-label="Logout">
                <HiArrowRightOnRectangle /> Logout
              </button>
              <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
                {mobileMenuOpen ? <HiXMark /> : <HiBars3 />}
              </button>
            </div>
          </nav>
        </>
      )}


      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Pages */}
        <Route path="/home" element={
          <ProtectedRoute><Home /></ProtectedRoute>
        } />
        <Route path="/about" element={
          <ProtectedRoute><About /></ProtectedRoute>
        } />
        <Route path="/weather" element={
          <ProtectedRoute><Weather /></ProtectedRoute>
        } />
        <Route path="/aqi" element={
          <ProtectedRoute><AirQuality /></ProtectedRoute>
          
        } />
        <Route path="/feedback" element={<Feedback />} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

      </Routes>
    </>
  );
};

export default App;
