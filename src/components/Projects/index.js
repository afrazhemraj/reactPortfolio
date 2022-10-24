import React from "react";
import "./index.scss";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import recipEasy from "../../assets/images/recipeasy.png";
import projects from "./projects";

const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 5000);
    };
  }, []);
  const handleClick = (myLink) => {
    window.location.href = myLink;
  };
  return (
    <>
      <div className="projects-page">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              "F",
              "e",
              "a",
              "t",
              "u",
              "r",
              "e",
              "d",
              " ",
              "P",
              "r",
              "o",
              "j",
              "e",
              "c",
              "t",
              "s",
            ]}
            idx={25}
          />
        </h1>
        <div className="projects">
          {projects.map((project, index) => {
            return (
              <div
                style={{ backgroundColor: `${project.color}` }}
                key={index}
                className="project"
                onClick={() => {
                  handleClick(project.link);
                }}
              >
                <div className="project-title">
                  <img src={project.image} alt="Project"></img>
                </div>
                <div className="project-body">
                  <span>{project.description}</span>
                  <div className="technologies">
                    {project.technologies.map((technology, index) => {
                      return (
                        <div
                          key={index}
                          className="technology"
                          style={{
                            backgroundColor: `${technology.color}`,
                            color: `${technology.textcolor}`,
                          }}
                        >
                          {technology.title}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pokeball">
        <div className="pokeball__button"></div>
      </div>
    </>
  );
};
export default Projects;
