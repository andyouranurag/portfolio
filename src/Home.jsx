import React from "react";
import web from "../src/images/homepage3.webp";
import {NavLink} from "react-router-dom";
import Common from "./common";


const Home = () => {
  return (
    <>
      <Common
      name="Hello,Welcome to MY" 
      imgsrc={web} 
      visit="/service" 
      btname="Get Started" 
      />
    </>
  );
};

export default Home;
