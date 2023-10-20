import React from 'react';
import profileImage from './redwhitestripesglassesatop.jpg';
import './Header.css'; // Import a CSS file for styling

const Header = () => {
  return (
    <header>
      <img src={profileImage} alt="Profile" className="round-image" /> {/* Add a class for styling */}
      <h1> Geedhavarshini Balaji</h1>
      <p>Web Developer</p>
    </header>
  );
}

export default Header;