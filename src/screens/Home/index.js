import React from "react";
import ProfileImage from "../assets/profile2.png";
import "./index.css";

function Home() {
  return (
    <section className="hero is-medium hero-color" id="home">
      <div className="hero-body columns">
        <div className="columns">
        <div className="column is-7 left-col is-align-self-center">
          <h2 className="title is-2 has-text-white">Hello I am</h2>
          <h1 className="title is-1 has-text-info">Geethan Hemathilake</h1><br />
          <h3 className="subtitle is-3 has-text-white">Undergraduate - Web Developer - Freelancer</h3>
          <h4 className="subtitle is-4 has-text-white">Passionate about building responsive web designs using various 
            frameworks and ability to finish projects on schedule and within 
            budget. Experienced and creative Software Developer with a 
            demonstrated experience in improving software performance, 
            testing and updating existing software, and developing new 
            software functionalities.</h4>
        </div>
          <div className="column is-5 is-align-self-center">
            <img className="hero-image" src={ProfileImage}></img>
          </div>
        </div>
        </div>
    </section>
  );
}

export default Home;
