import React from "react";
import './About.css';

function About() {
  return (
    <div id="about">
      <div className="container2">
        <div className="about-2">
          <div className="about-img">
            <img src={require("../assests/Designer.png")} alt="about" />
          </div>

          <div className="about-me">
            <p className="about-me-head">ABOUT ME</p>
            <h4 className="about-me-head2">A dedicated Full-Stack Developer</h4>
            <p className="about-me-read">
              Hi! I'm Himanshu , a Full Stack Developer specializing in the MERN
              stack MongoDB, Express, React, Node and also SQL I'm all about
              turning ideas into reality through clean and efficient code. My
              expertise lies in crafting dynamic,engaging web apps. I am also a
              team player who thrives in collaborating with cross-functional
              teams to produces outstanding web apps, Let's build something
              awesome together!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
