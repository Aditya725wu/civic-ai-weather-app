import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // CSS file for styling

 export  const Navbar = () => {
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
      </ul>
    </nav>
  );
};


