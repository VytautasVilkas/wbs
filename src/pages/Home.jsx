import React, { useState } from 'react';
import HomeAnimation from '../elements/HomeAnimation';
import './Theme.css';
import '../elements/Header.css';
import Weather from '../elements/Weather';
import CitySelector from '../elements/Capitals';
import Cloud from '../components/Cloud';
import Star from '../components/StarCollaps'
import musicbox from '../elements/MediaPlayer'
const Home = () => {
  const [selectedCity, setSelectedCity] = useState({ capital: 'Vilnius', code: 'LT' });
  

  return (
    <div className="home-page">
      
      
      
      
      <header className="home-header no-select">
        <h3>
          <span className="span">W</span>
          <span className="span">e</span>
          <span className="span">l</span>
          <span className="span">c</span>
          <span className="span">o</span>
          <span className="span">m</span>
          <span className="span">e</span>
        </h3>
        <h3>
          <span className="word-span">To</span>
          <span className="word-span">my</span>
          <span className="word-span">bio</span>
          <span className="word-span">Page</span>
        </h3>
      </header>

      <div className="home-animation-container no-select">
        <HomeAnimation />
        <div className="no-select">
          <Weather city={selectedCity.capital} />
        </div>
      </div>
      {/* <Star /> */}
      <musicbox />
      <div className="no-select">
        <CitySelector selectedCity={selectedCity} onCityChange={setSelectedCity} />
      </div>
      
      <div className="no-select">
        <Cloud />
      </div>
    </div>
  );
};

export default Home;














