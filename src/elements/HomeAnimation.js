import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationOne from '../animations/SpaceMan.json'; // Adjust the path as necessary
import './HomeAnimation.css'; 

const HomeAnimation = () => {
  const lottieRef = useRef();

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5); // Set the speed to 0.5x to slow it down
    }
  }, []);

  return (
    <div className="lottie-wrapper">
        <Lottie 
          lottieRef={lottieRef}
          animationData={animationOne} 
          loop={true} 
          style={{ width: '70%', height: '70%' }} // Adjust the size as needed
        />
    </div>
  );
};

export default HomeAnimation;



