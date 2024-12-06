import React from 'react';
import './LoadingSpinner.css';  // Import the updated spinner CSS

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner-container">
        <div className="spinner-item"></div>
        <div className="spinner-item"></div>
        <div className="spinner-item"></div>
        <div className="spinner-item"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
