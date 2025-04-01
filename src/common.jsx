import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header">
        <div className="container text-center">
          <h1>
            {props.name} <strong>Portfolio</strong>
          </h1>
          <h2>{props.description}</h2>
          <div className="mt-4">
            <NavLink to={props.visit} className="btn btn-primary">
              {props.btname}
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
