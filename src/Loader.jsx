import React from "react";
import "./App.css"; // Ensure this file exists

const Loader = ({ fadeOut }) => {
    return (
      <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
        <div className="spinner"></div>
      </div>
    );
  };
  
export default Loader;