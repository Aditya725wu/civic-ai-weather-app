import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

 export const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🌍 My Weather App</div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        <li>
          <NavLink to="/weather" className="nav-link">Weather</NavLink>
        </li>
        <li>
          <NavLink to="/airquality" className="nav-link">Air Quality</NavLink>
        </li>
      </ul>
    </nav>
  );
};


