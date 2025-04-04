import React from "react";
import Card from "react-bootstrap/Card"; // Bootstrap Card Component
import Sdata from "./Sdata";
import "./App.css"; // Import CSS for styling

const Skills = () => {
  return (
    <div className="container-fluid skills-container py-5">
      <div className="text-center my-5">
        <h1 className="skills-title"> My Skills </h1>
      </div>
      <div className="row justify-content-center">
        {Sdata.map((val, ind) => (
          <div className="col-md-4 col-sm-6 mb-4" key={ind}>
            <Card className="skill-card">
              <Card.Img variant="top" src={val.imgsrc} className="skill-img" />
              <Card.Body>
                <Card.Title>{val.title}</Card.Title>
                <Card.Text>{val.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
