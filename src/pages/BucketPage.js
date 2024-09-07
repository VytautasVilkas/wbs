import React, { useEffect } from 'react';
import Home from './Home';
import Bio from './BioPage';
import './Theme.css'; // Your CSS file for page styling
import ArrowButton from '../elements/ArrowButton';
import Particles from '../components/Particles'; // Import Particles (snow effect)

const BucketPage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="bucket-page">
      <div className="background-layer" /> {/* Background color here */}
      <Particles /> {/* Particles video layer */}
      <ArrowButton />
      <div>
        <section id="home-section">
          <Home /> {/* Home content */}
        </section>
        <section id="bio-section">
          <Bio /> {/* BioPage content */}
        </section>
      </div>
    </div>
  );
};

export default BucketPage;


