import React from "react";
import './App.css';

import Common from "./common";

const Home = () => {
  return (
    <>
      <Common
        name="Hi, Welcome to Anurag Dubey!"
        description="I am a Data Analyst, Python Developer, and Full Stack Developer with expertise in Python, SQL, Power BI, and the MERN stack. Passionate about data-driven solutions, web development, and cloud technologies."
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
