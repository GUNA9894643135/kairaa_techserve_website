import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="logo-animation">
        {/* Add your logo here */}
        <img src="/logo.png" alt="Loading Logo" className="logo" />
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Loader;
