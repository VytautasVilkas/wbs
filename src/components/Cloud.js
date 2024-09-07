import React from 'react';
import './Cloud.css';
import cloudImage1 from '../assets/images/cloud.png';
import cloudImage4 from '../assets/images/cloud3.png';
import cloudImage5 from '../assets/images/cloud4.png';

const Cloud = () => {
  return (
    <div>
      <img src={cloudImage1} alt="Cloud 1" className="cloud cloud-1" />
      <img src={cloudImage4} alt="Cloud 4" className="cloud cloud-4" />
      <img src={cloudImage5} alt="Cloud 3" className="cloud cloud-3" />

      {/* Add more images as needed */}
    </div>
  );
};

export default Cloud;
