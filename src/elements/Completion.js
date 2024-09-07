import React, { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationOne from '../animations/Animation - 1725482349896.json'; // Your progress bar animation file
import './HomeAnimation.css'; 

const Completion = () => {
  const lottieRef = useRef();
  const [animationProgress, setAnimationProgress] = useState(0); // Track progress (0 to 1)
  const [isAnimatingForward, setIsAnimatingForward] = useState(true); // Track the direction of the animation (forward/backward)

  // Detect the current section and move the progress bar accordingly
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check if user scrolled past the home section
      if (scrollPosition >= windowHeight) {
        // Scrolled to the next section, move the animation to 50%
        setIsAnimatingForward(true);
        setAnimationProgress(0.5); // Target 50% of the animation
      } else {
        // Scrolled back to the home section, move the animation back to 0%
        setIsAnimatingForward(false);
        setAnimationProgress(0); // Target 0% of the animation
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Play the animation and either move forward to 50% or reverse to 0%
  useEffect(() => {
    if (lottieRef.current) {
      const animationDuration = lottieRef.current.getDuration(true); // Get total duration of the animation

      // Function to control animation progress (forward or backward)
      const controlAnimation = (targetProgress) => {
        const currentProgress = lottieRef.current.currentFrame / animationDuration;

        if (isAnimatingForward && currentProgress < targetProgress) {
          // Move animation forward
          lottieRef.current.play();
          if (currentProgress >= targetProgress) {
            lottieRef.current.goToAndStop(animationDuration * targetProgress, true); // Stop at 50%
          }
        } else if (!isAnimatingForward && currentProgress > targetProgress) {
          // Move animation backward (reverse)
          lottieRef.current.playSegments([currentProgress * animationDuration, targetProgress * animationDuration], true);
          if (currentProgress <= targetProgress) {
            lottieRef.current.goToAndStop(animationDuration * targetProgress, true); // Stop at 0%
          }
        }
      };

      // Trigger the animation progress control based on scroll
      controlAnimation(animationProgress);
    }
  }, [animationProgress, isAnimatingForward]);

  return (
    <div className="Completion">
      <div className="progress-bar-container">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationOne}
          loop={false} // No loop, manually controlling the progress
          style={{ width: '50vw', height: '50vw' }} // Adjust size as needed
        />
      </div>
    </div>
  );
};

export default Completion;