import React, {  useState } from "react";
import "./App.css";

const Loader = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleAnimationEnd = () => {
    setFadeOut(true); // trigger CSS fade-out
    setTimeout(() => {
      onFinish(); // notify App to show the main content
    }, 800); // match your fade-out transition time in CSS
  };

  return (
    <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
      <img src="/AD_logo_no.png" alt="Logo" className="loader-logo" />
      <div className="typing-text" onAnimationEnd={handleAnimationEnd}>
        Welcome to My Portfolio
      </div>
    </div>
  );
};

export default Loader;
