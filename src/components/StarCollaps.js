import React, { useEffect, useRef, useState } from 'react';
import './StarCollaps.css'; 
import starVideo from '../assets/star.mp4'; 

const Starcollaps = () => {
  const videoRef = useRef(null); 
  const [opacity, setOpacity] = useState(1); 

  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; 
      const windowHeight = window.innerHeight; 
      const newOpacity = Math.max(1 - scrollTop / (windowHeight / 2), 0.01); 
      setOpacity(newOpacity); 
    };

    window.addEventListener('scroll', handleScroll); 
    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []); 

  return (
    <div className="star-container"> 
      <video
        className="star-video"
        autoPlay
        loop
        muted
        ref={videoRef} 
        style={{ opacity }}
      >
        <source src={starVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Starcollaps;
