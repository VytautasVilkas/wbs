import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import './MediaPlayer.css';
import demoAudio from '../media/DemoForWebSite.mp3'; // Adjust the path as necessary
import buttonAnimation from '../animations/Button.json'; // Adjust the path to your Lottie animation file

const MediaPlayer = () => {
  const [isVisible, setIsVisible] = useState(false); // Initially closed
  const audioRef = useRef(null);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (audioRef.current && isVisible) {
      audioRef.current.volume = 0.5; // Set volume to 50%
    }
  }, [isVisible]);

  return (
    <div>
      <div className="toggle-button" onClick={handleToggleVisibility}>
        <Lottie animationData={buttonAnimation} loop={true} style={{ width: 50, height: 50 }} />
        <span className="playlist-header">{isVisible ? 'Close' : 'Click to listen'}</span>
      </div>
      {isVisible && (
        <div className="media-player">
          <audio ref={audioRef} controls src={demoAudio}>
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default MediaPlayer;





















