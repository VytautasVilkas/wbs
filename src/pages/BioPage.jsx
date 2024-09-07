import React from 'react';
import Lottie from 'lottie-react';
import catAnimation from '../animations/Cat.json'; // Path to your animation
import './Theme.css'; // Import the main CSS


const BioPage = () => {
  return (
    <div className="home-page">
      
      <Lottie animationData={catAnimation} style={{ width: 300, height: 300 }} />
      <header className="bio-header no-select">
        <h3>
          <span className="span">A</span>
          <span className="span">b</span>
          <span className="span">o</span>
          <span className="span">u</span>
          <span className="span">t</span>
          <span className="span">M</span>
          <span className="span">e</span>
        </h3>
      </header>

      <p style={{ color: 'white' }}>This is the biography page with a cat animation.</p>
    </div>
  );
};

export default BioPage;


