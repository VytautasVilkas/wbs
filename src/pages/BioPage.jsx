import React, { useState } from 'react';


import Lottie from 'lottie-react';
import catAnimation from '../animations/Cat.json'; // Path to your animation

import './Theme.css'; 
import CitySelector from '../elements/Capitals';
import Weather from '../elements/Weather';
import Cloud from '../components/Cloud';



const BioPage  = () => {
  const [selectedCity, setSelectedCity] = useState({ capital: 'Vilnius', code: 'LT' });
  return (
    
    <div className="bio-page no-select">
    <div>
      <Weather city={selectedCity.capital} />
      <CitySelector selectedCity={selectedCity} onCityChange={setSelectedCity} />
      <Cloud />
    </div>
  
    {/* Correctly using <header> for page header content */}
    <header className="bio-header">
      <h3>
        <span className="word-span">About</span>
        <span className="span">Me</span>
      </h3>
    </header>
  
    {/* Use <div> for paragraph text instead of <header> */}
    <div className="biography-text">
      <p>
        Sveiki
      </p>
    </div>
  </div>
    
    
  );
};

export default BioPage;


