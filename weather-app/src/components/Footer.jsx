import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Civic AI — Smart Solutions for a Smarter City</p>
      <span>© {new Date().getFullYear()} All Rights Reserved</span>
    </footer>
  );
};

export default Footer;
