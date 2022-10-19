import React from "react";
import "./index.scss";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import recipEasy from "../../assets/images/chicken.png";

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
          <div
            className="project"
            onClick={() => {
              handleClick("https://www.google.com/");
            }}
          >
            <div className="project-title">
              <img src={recipEasy} alt="RecipEasy"></img>
            </div>
            <div className="project-body">
              <span>
                Enter available ingredients, appliances, and the amount of time
                you have to cook. RecipEasy will search over 10 000 recipes for
                ones that can be cooked within user parameters. Less thinking,
                more eating!
              </span>
              <div className="technologies">
                <div
                  className="technology"
                  style={{
                    border: "2px solid gold",
                    color: "gold",
                  }}
                >
                  JAVASCRIPT
                </div>
                <div
                  className="technology"
                  style={{
                    border: "2px solid orange",
                    color: "orange",
                  }}
                >
                  HTML
                </div>
                <div
                  className="technology"
                  style={{
                    border: "2px solid darkcyan",
                    color: "darkcyan",
                  }}
                >
                  REACT
                </div>
                <div
                  className="technology"
                  style={{
                    "background-color": "#5ff56e40",
                    color: "green",
                  }}
                >
                  MONGODB
                </div>
              </div>
            </div>
          </div>
          <div className="project"></div>
          <div className="project"></div>
        </div>
      </div>
      <div className="pokeball">
        <div className="pokeball__button"></div>
      </div>
    </>
  );
};
export default Projects;
