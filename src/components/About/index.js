import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";
import Afraz from "../../assets/images/afraz2.jpg";

const About = () => {
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
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
              idx={25}
            />
          </h1>
          <p>
            I am a third-year <span>Mechatronics Engineering</span>{" "}
            undergraduate student at the <span>University of Waterloo</span>.
            Through pursuing knowledge in software, electrical and mechanical
            systems, I am seeking opportunities to apply engineering concepts to
            solve real-world problems. I am interested in biomechatronics,
            software development and automation.
          </p>
          <p>
            {" "}
            I am currently a <span>fullstack software developer</span> during
            co-op terms and am always interested in new opportunities relating
            to software! In my free time I enjoy 3D printing, coding, playing
            basketball, and hanging out with friends.
          </p>
        </div>
        <div className="portrait">
          <img src={Afraz} alt="AH" />
        </div>
      </div>
      <div className="pokeball">
        <div className="pokeball__button"></div>
      </div>
    </>
  );
};

export default About;
