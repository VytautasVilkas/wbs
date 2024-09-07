import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import arrowAnimation from '../animations/ArrowDown.json';

const ArrowButton = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(true);  // Track scroll direction
  const [rotation, setRotation] = useState(0);  // 0 for down, 180 for up
  const sections = ['#home-section', '#bio-section']; // Only two sections

  // Function to scroll to the next or previous section
  const handleScroll = () => {
    const currentHash = window.location.hash || '#home-section';
    const currentSectionIndex = sections.indexOf(currentHash); // Find index of the current section

    if (isScrollingDown) {
      if (currentSectionIndex < sections.length - 1) {
        // Scroll to the next section (bio-section)
        const nextSection = document.querySelector(sections[currentSectionIndex + 1]);
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
          window.location.hash = sections[currentSectionIndex + 1];  // Update the hash
          setIsScrollingDown(false);  // Set scrolling direction to "up" after reaching the last section
          setRotation(180);           // Rotate arrow to indicate scrolling up
        }
      }
    } else {
      if (currentSectionIndex > 0) {
        // Scroll to the previous section (home-section)
        const previousSection = document.querySelector(sections[currentSectionIndex - 1]);
        if (previousSection) {
          previousSection.scrollIntoView({ behavior: 'smooth' });
          window.location.hash = sections[currentSectionIndex - 1];  // Update the hash
          setIsScrollingDown(true);   // Set scrolling direction to "down" after reaching the first section
          setRotation(0);             // Reset arrow rotation to indicate scrolling down
        }
      }
    }
  };

  // Smoothly scroll to the current section when the hash changes
  useEffect(() => {
    const scrollToSection = () => {
      const section = document.querySelector(window.location.hash || '#home-section');
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    window.addEventListener('hashchange', scrollToSection);

    return () => {
      window.removeEventListener('hashchange', scrollToSection);
    };
  }, []);

  return (
    <div className="arrow-button-container" onClick={handleScroll}>
      <div
        className="arrow-click-area"
        style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.5s ease' }} // Rotate based on scroll direction
      >
        <Lottie
          animationData={arrowAnimation}
          loop={true}
          className="arrow-lottie"
        />
      </div>
    </div>
  );
};

export default ArrowButton;

