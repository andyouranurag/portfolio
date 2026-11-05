import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./App.css"; // Using App.css for styles

const Card = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="col-md-4 col-10 mx-auto"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="card skill-card">
        <img src={props.imgsrc} className="card-img-top skill-img" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{props.title}</h5>

          {/* Description always visible */}
          <p className="card-text">{props.description}</p>

          <NavLink to="#" className="btn btn-primary">
            Explore
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
