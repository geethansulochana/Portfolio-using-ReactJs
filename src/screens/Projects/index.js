import React from "react";
import "./index.css";

function Projects() {
  return (
    <section
      className="main-content has-text-white is-medium py-4 skills-color pb-6"
      id="projects"
    >
      <h2 className="title is-2 has-text-info">PROJECTS</h2>
      <div className="home-hero">
        <div className="columns">
          <div className="column is-6 left-col is-align-self-center">
            <h2 className="subtitle is-2 has-text-white">Nutrition App</h2>
            <ul>
              <li className="subtitle is-3 has-text-white">  qvern Softwares (2020) 
                The high demand for nutrition 
                solutions makes startups and well established businesses want to break 
                in the health and wellness food 
                market</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
