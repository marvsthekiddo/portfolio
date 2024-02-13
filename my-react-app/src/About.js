
import React from 'react';
import './about.css'; // Import your CSS file

const About = () => {
  return (
    <div>
      {/* Global Header Component */}
      <global-header></global-header>
      
      {/* Main Content Section */}
      <main>
        {/* First Inner Section */}
        <section className="inner-section">
          <div className="container">
            {/* Column 1 */}
            <div className="column-1">
              {/* Speech Bubble */}
              <div className="speech-bubble">
                <p>Hello, I am</p>
              </div>
              {/* Main Heading */}
              <h1>Mr. Marvin</h1>
              {/* Sub Heading */}
              <p>A Professional WordPress Developer</p>
              {/* Buttons */}
              <div className="inner-section__button">
                <a href="#" className="button">My Work</a>
                <a href="#" className="button button--border">Contact Now</a>
              </div>
              {/* Scroll Down Button */}
              <div className="scroll-down__button">
                <a href="#" className="scroll-down">↓</a>
              </div>
            </div>
            {/* Column 2 */}
            <div className="column-2">
              {/* Image */}
              <img className="own-picture" src="images/about-us essentials/Group 34859.png" alt="Mr. Marvin" />
            </div>
          </div>
        </section>
      </main>

      {/* Second Inner Section */}
      <section className="inner-section">
        <div className="container">
          {/* Column 1 */}
          <div className="column-1">
            {/* Image */}
            <img className="about-me" src="images/about-us essentials/about-me.png" alt="Practicing Code" />
          </div>
          {/* Column 2 */}
          <div className="column-2">
            {/* Progress Container */}
            <div className="progress-container">
              {/* Heading */}
              <h1>Read About My Life Struggle Story!</h1>
              {/* Paragraph */}
              <p>I have a genuine passion for WordPress development and have been working in this field for 2 years present. Throughout my career, I have successfully built and maintained various WordPress websites for clients, focusing on creating visually appealing and user-friendly experiences.</p>
              {/* Progress Bars */}
              <div className="progress-container">
                <div className="progress-percentage">WordPress 78%</div>
                <div className="progress-bar">
                  <div className="progress-bar-inner" style={{ '--percentage': 78 }} data-color="medium"></div>
                </div>
              </div>
              {/* Add other progress bars */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
