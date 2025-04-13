import React from "react";
import Card from "react-bootstrap/Card"; // Bootstrap Card Component
import Sdata from "./Sdata";
import "./App.css"; // Import CSS for styling

const Skills = () => {
  return (
    <div className="container-fluid skills-container py-5">
      {/* Floating Tech Logos */}
  <div className="floating-logos">
  <i className="devicon-python-plain logo logo1"></i>
  <i className="devicon-mysql-plain logo logo2"></i>
  <i className="devicon-nodejs-plain logo logo3"></i>
  <i className="devicon-react-original logo logo4"></i>
  <i className="devicon-html5-plain logo logo5"></i>
  <i className="devicon-css3-plain logo logo6"></i>
  <i className="devicon-javascript-plain logo logo7"></i>
  <i className="devicon-mongodb-plain logo logo8"></i>
  <i className="devicon-git-plain logo logo9"></i>
  <i className="devicon-github-original logo logo10"></i>
  <i className="devicon-vscode-plain logo logo11"></i>
  <i className="devicon-linux-plain logo logo12"></i>
  <i className="devicon-docker-plain logo logo13"></i>
</div>

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
