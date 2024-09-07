import React, { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
import './Weather.css'; // Import the CSS file

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [flagUrl, setFlagUrl] = useState(null);
  const weatherRef = useRef(null);
  const dragHandleRef = useRef(null);
  const [position, setPosition] = useState({ top: '25%', left: '5%' });
  const [dragging, setDragging] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const apiUrl = process.env.REACT_APP_API_URL || `https://vytautasvilkasweather.vercel.app`;

  // Fetch weather and flag data
  useEffect(() => {
    const fetchWeather = async () => {
      setError(null);
      try {
        const response = await fetch(`https://vytautasvilkasweather.vercel.app/api/weather?city=${city}`, {
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
          },
        });
        const data = await response.json();
        if (response.ok) {
          setWeather(data);
          const country = data.sys.country;
          if (country) {
            const countryResponse = await fetch(`https://restcountries.com/v3.1/alpha/${country}`);
            const countryData = await countryResponse.json();
            setFlagUrl(countryData[0]?.flags?.svg);
          }
        } else {
          setError(`Error: ${data.message}`);
          setWeather(null);
        }
      } catch (fetchError) {
        setError('Failed to fetch weather data.');
        setWeather(null);
      }
    };

    fetchWeather();
  }, [city]); // React to changes in city

  // Handle dragging logic for the weather card
  const handleMouseDown = (e) => {
    if (e.target === dragHandleRef.current) {
      setDragging(true);
      setInitialPosition({ x: e.clientX, y: e.clientY });
      const rect = weatherRef.current.getBoundingClientRect();
      setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const newTop = e.clientY - offset.y;
      const newLeft = e.clientX - offset.x;
      setPosition({ top: `${newTop}px`, left: `${newLeft}px` });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  return (
    <div
      className="weather-container"
      style={{ top: position.top, left: position.left }}
      ref={weatherRef}
      onMouseDown={handleMouseDown}
    >
      {error && <p className="weather-error">{error}</p>}
      {weather && (
        <div className="weather-card">
          <div className="drag-handle" ref={dragHandleRef}></div>
          <div className="weather-city-container">
            <h1 className="weather-city">{weather.name}</h1>
            {flagUrl && <img className="country-flag flag-container" src={flagUrl} alt="Country flag " />}
          </div>
          <p className="weather-temp">{weather.main.temp}°C</p>
          <p className="weather-desc">{weather.weather[0].description}</p>
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather icon"
          />
        </div>
      )}
    </div>
  );
};

export default Weather;






