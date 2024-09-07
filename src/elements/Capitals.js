
import React, { useState, useEffect } from 'react';
import './Capitals.css';

const europeanCapitals = [
    { country: 'Albania', capital: 'Tirana', code: 'AL' },
    { country: 'Andorra', capital: 'Andorra la Vella', code: 'AD' },
    { country: 'Armenia', capital: 'Yerevan', code: 'AM' }, // Still considered a part of the Council of Europe
    { country: 'Austria', capital: 'Vienna', code: 'AT' },
    { country: 'Azerbaijan', capital: 'Baku', code: 'AZ' }, // Considered part of the Council of Europe
    { country: 'Belarus', capital: 'Minsk', code: 'BY' },
    { country: 'Belgium', capital: 'Brussels', code: 'BE' },
    { country: 'Bosnia and Herzegovina', capital: 'Sarajevo', code: 'BA' },
    { country: 'Bulgaria', capital: 'Sofia', code: 'BG' },
    { country: 'Croatia', capital: 'Zagreb', code: 'HR' },
    { country: 'Cyprus', capital: 'Nicosia', code: 'CY' }, // Geopolitically part of Europe
    { country: 'Czech Republic', capital: 'Prague', code: 'CZ' },
    { country: 'Denmark', capital: 'Copenhagen', code: 'DK' },
    { country: 'Estonia', capital: 'Tallinn', code: 'EE' },
    { country: 'Finland', capital: 'Helsinki', code: 'FI' },
    { country: 'France', capital: 'Paris', code: 'FR' },
    { country: 'Georgia', capital: 'Tbilisi', code: 'GE' }, // Geopolitically linked to Europe
    { country: 'Germany', capital: 'Berlin', code: 'DE' },
    { country: 'Greece', capital: 'Athens', code: 'GR' },
    { country: 'Hungary', capital: 'Budapest', code: 'HU' },
    { country: 'Iceland', capital: 'Reykjavik', code: 'IS' },
    { country: 'Ireland', capital: 'Dublin', code: 'IE' },
    { country: 'Italy', capital: 'Rome', code: 'IT' },
    { country: 'Kosovo', capital: 'Pristina', code: 'XK' },
    { country: 'Latvia', capital: 'Riga', code: 'LV' },
    { country: 'Liechtenstein', capital: 'Vaduz', code: 'LI' },
    { country: 'Lithuania', capital: 'Vilnius', code: 'LT' },
    { country: 'Luxembourg', capital: 'Luxembourg', code: 'LU' },
    { country: 'Malta', capital: 'Valletta', code: 'MT' },
    { country: 'Moldova', capital: 'Chișinău', code: 'MD' },
    { country: 'Monaco', capital: 'Monaco', code: 'MC' },
    { country: 'Montenegro', capital: 'Podgorica', code: 'ME' },
    { country: 'Netherlands', capital: 'Amsterdam', code: 'NL' },
    { country: 'North Macedonia', capital: 'Skopje', code: 'MK' },
    { country: 'Norway', capital: 'Oslo', code: 'NO' },
    { country: 'Poland', capital: 'Warsaw', code: 'PL' },
    { country: 'Portugal', capital: 'Lisbon', code: 'PT' },
    { country: 'Romania', capital: 'Bucharest', code: 'RO' },
    { country: 'Russia', capital: 'Moscow', code: 'RU' }, // Considered part of Europe politically and geographically (though controversial)
    { country: 'San Marino', capital: 'San Marino', code: 'SM' },
    { country: 'Serbia', capital: 'Belgrade', code: 'RS' },
    { country: 'Slovakia', capital: 'Bratislava', code: 'SK' },
    { country: 'Slovenia', capital: 'Ljubljana', code: 'SI' },
    { country: 'Spain', capital: 'Madrid', code: 'ES' },
    { country: 'Sweden', capital: 'Stockholm', code: 'SE' },
    { country: 'Switzerland', capital: 'Bern', code: 'CH' },
    { country: 'Turkey', capital: 'Ankara', code: 'TR' }, // Partly European, member of the Council of Europe
    { country: 'Ukraine', capital: 'Kyiv', code: 'UA' },
    { country: 'United Kingdom', capital: 'London', code: 'GB' },
    { country: 'Vatican City', capital: 'Vatican City', code: 'VA' }
];

const CitySelector = ({ selectedCity, onCityChange }) => {
  const [flagUrl, setFlagUrl] = useState(null);

  useEffect(() => {
    const fetchFlag = async () => {
      if (selectedCity) {
        const selectedCountry = europeanCapitals.find(cap => cap.capital === selectedCity.capital);
        if (selectedCountry && selectedCountry.code) {
          try {
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${selectedCountry.code}`);
            const data = await response.json();
            if (data && data[0] && data[0].flags && data[0].flags.svg) {
              setFlagUrl(data[0].flags.svg);
            }
          } catch (error) {
            console.error(`Error fetching flag for ${selectedCity.capital}:`, error);
            setFlagUrl(null);
          }
        }
      }
    };

    fetchFlag();
  }, [selectedCity]);

  return (
    <div className="city-selector">
      <select
        id="city-select"
        value={selectedCity.capital} // Use capital for value
        onChange={(e) => {
          const selected = europeanCapitals.find(cap => cap.capital === e.target.value);
          onCityChange({ capital: selected.capital, code: selected.code });
        }}
      >
        {europeanCapitals.map((cap) => (
          <option key={cap.capital} value={cap.capital}>
            {cap.capital}
          </option>
        ))}
      </select>
      {flagUrl && <img src={flagUrl} alt={`${selectedCity.capital} flag`} className="flag-icon" />}
    </div>
  );
};

export default CitySelector;