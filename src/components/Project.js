import React from "react";
import "./Project.css";
import { data } from "./projectData";

function Project() {
  return (
    <div id="projects">
      <div className="project-container">
        <h2>PROJECT</h2>
        <h3>Each Project is a unique piece of development</h3>
        <div className="project-card">
          {data.map((project, index) => {
            return (
              <div key={index}>
                <div className="card">
                  <div className="image">
                    <img src={project.img} alt=""/>
                  </div>
                  <div className="content">
                    <a href="#hello">
                      <span className="title">
                       {project.title}
                      </span>
                    </a>

                    <p className="desc">
                      {project.description}
                    </p>
                    <div className="button-holder">
                        <a className="action" href={project.githubLink}>
                        Source Code
                        <span aria-hidden="true">→</span>
                        </a>
                        <a className="action" href={project.hostLink}>
                        Live
                        <span aria-hidden="true">→</span>
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
