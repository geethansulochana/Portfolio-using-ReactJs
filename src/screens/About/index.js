import React from "react";

import "./index.css";

function About() {
  return (
    <section
      className="main-content is-medium py-4 project-color"
      id="about"
    >
       <div className="home-hero">
        <div className="columns">
          <div className="column is-6 left-col is-align-self-center">
          <h2 className="title is-2 has-text-info">ABOUT ME</h2>
            <h2 className="subtitle is-2 has-text-white">Skills</h2>
            <ul>
              <li className="subtitle is-4 has-text-white"> Ability to code software according to 
                published standards and design guidelines</li>
              <li className="subtitle is-4 has-text-white"> Effectively manages changes to work 
                tasks and the work environment and 
                assists others with adapting to change</li><br />
            </ul>
            <h2 className="subtitle is-2 has-text-white pt;">Contact</h2>
            <ul>
              <li className="subtitle is-4 has-text-white"> Phone: +94712475919 </li>
              <li className="subtitle is-4 has-text-white"> Email: geethansh123@gmail.com</li>
              <li className="subtitle is-4 has-text-white"> LinkedIn Profile: https://www.linkedin.com/in/geethanhemathilake-819007255/</li>
            </ul>
          </div>
          <div className="column is-6 left-col is-align-self-center">
            <h2 className="subtitle is-2 has-text-white">Extra-Curricular Activities</h2>
            <ul>
              <li className="subtitle is-4 has-text-white">  Junior Prefect at Anuradhapura Central 
                College</li>
              <li className="subtitle is-4 has-text-white">  Player of UOC Baseball team</li>
              <li className="subtitle is-4 has-text-white">  General member of Colombo Beacon</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
