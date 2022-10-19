import "./index.scss";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import icons from "./icons";
import experiences from "./experiences";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import ExperienceModal from "../ExperienceModal";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [activeExperience, setExperience] = useState({});
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 5000);
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
                <div className="skill-container" key={index}>
                  <div className="skill">
                    <img src={icon.image} alt={icon.name} />
                  </div>
                  <div className="skill-name">{icon.name}</div>
                </div>
              );
            })}
          </div>
          <div className="experiences">
            {experiences.map((experience, index) => {
              return (
                <div className="experience-container" key={index}>
                  <div className="info-container">
                    <div className="experience-year">{experience.year}</div>
                    <div className="more-button">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faArrowUpRightFromSquare}
                        color="#000000"
                        onClick={() => {
                          setShowModal(true);
                          setExperience(experience);
                        }}
                      />
                    </div>
                  </div>
                  <div className="experience-info">
                    <div className="title">{experience.title}</div>
                    <div className="company">{experience.company}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {showModal && (
          <ExperienceModal
            setShowModal={setShowModal}
            animation="animate"
            experience={activeExperience}
          />
        )}
      </div>
      <div className="pokeball">
        <div className="pokeball__button"></div>
      </div>
    </>
  );
};
export default Skills;
