import React from 'react';
import './header.css'; // Import your CSS file

const Header = () => {
  const setActive = (event) => {
    // Implement setActive function if needed
  };

  return (
    <header className="main-navigation">
      <div className="main-navigation-container">
        <div className="main-navigation-logo">
          <img src="assets/images/header essentials/Group 205.png" width="40%" alt="Company Logo" />
        </div>
        <nav className="main-navigation-menu">
          <ul className="main-navigation-links">
            <li><a href="http://127.0.0.1:5500/assets/about-us.html" onClick={(e) => setActive(e.target)}>About Me</a></li>
            <li><a href="#" onClick={(e) => setActive(e.target)}>Services</a></li>
            <li><a href="#" onClick={(e) => setActive(e.target)}>Portfolio</a></li>
            <li><a href="#" onClick={(e) => setActive(e.target)}>Testimonials</a></li>
            <li><a href="#" onClick={(e) => setActive(e.target)}>Blog</a></li>
            <li><a href="#" onClick={(e) => setActive(e.target)}>Contact Us</a></li>
            <li className="cta-button"><a href="#" className="main-navigation-cta-button">Hire Me</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
