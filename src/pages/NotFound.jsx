
import React from 'react';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import hehe from '../animations/BrokeMachine.json'; // Path to your Cat animation
import './Theme.css';
const NotFound = () => {
  return (
    <div id="bio-section" className="your-page">
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <Lottie animationData={hehe} style={{ width: 300, height: 300 }} />

        <header className="home-header">
      <h3>404 - Page Not Found</h3>
      
      </header>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" style={{ color: '#007bff', textDecoration: 'underline' }}>
        Go back to Home
      </Link>
    </div>
    </div>
  );
};

export default NotFound;
