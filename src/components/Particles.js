import React from 'react';
import './Particles.css'; // Import the CSS for styling
import snowVideo from '../assets/particles.mp4'; // First video (snow effect)

const Particles = () => {
  return (
    <div className="particles-container"> {/* Added className for styling */}
      <video className="particles-video" autoPlay loop muted>
        <source src={snowVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Particles;
