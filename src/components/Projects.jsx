import React from "react";
import project from "./Data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container projects " id="projects">
        <h1>PROJECTS</h1>
        <div className="items">
          {project.map((data) => (
            <>
              <div
                className="item"
                key={data.id}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="card ">
                  <div className="img">
                    <img
                      src={data.imageSrc}
                      className="card-img-top"
                      alt="..."
                    />
                  </div>

                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href="{data.demo}" className="btn btn-primary">
                      Demo
                    </a>
                    <a href="{data.source}" className="btn btn-warning">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default Projects;
