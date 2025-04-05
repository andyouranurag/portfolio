import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css"; // We'll create this new CSS file

const Common = (props) => {
  return (
    <section id="header" className="common-section d-flex align-items-center">
      <div className="container text-center">
        <h1 className="main-heading mb-3">
          {props.name} <strong className="brand-name">Portfolio</strong>
        </h1>
        <p className="description-text">{props.description}</p>
        <div className="mt-4">
          <NavLink to={props.visit} className="btn btn-primary custom-btn">
            {props.btname}
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Common;
