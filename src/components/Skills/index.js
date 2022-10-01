import "./index.scss";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import icons from "./icons";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
    };
  }, []);
  return (
    <>
      <div className="skills-page">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              "S",
              "k",
              "i",
              "l",
              "l",
              "s",
              " ",
              "&",
              " ",
              "E",
              "x",
              "p",
              "e",
              "r",
              "i",
              "e",
              "n",
              "c",
              "e",
            ]}
            idx={25}
          />
        </h1>
        <div className="skills-experiences">
          <div className="skills">
            {icons.map((icon, index) => {
              return (
                <div className="skill-container">
                  <div className="skill" key={index}>
                    <img src={icon.image} alt={icon.name} />
                  </div>
                  <div className="skill-name">{icon.name}</div>
                </div>
              );
            })}
          </div>
          <div className="experiences">
            <span>INSERT TIMELINE HERE</span>
          </div>
        </div>
      </div>
      <div className="pokeball">
        <div className="pokeball__button"></div>
      </div>
    </>
  );
};
export default Skills;
