import "./index.scss";
import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [
    "A",
    "f",
    "r",
    "a",
    "z",
    " ",
    "H",
    "e",
    "m",
    "r",
    "a",
    "j",
  ];
  const titleArray = [
    "W",
    "e",
    "l",
    "c",
    "o",
    "m",
    "e",
    "!",
    " ",
    "I",
    "'",
    "m",
  ];

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="content">
          <div className="title">
            <h2>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={titleArray}
                idx={12}
              />
            </h2>
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={24}
              />
            </h1>
            <p>Fullstack Developer / Mechatronics Engineering Student</p>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
          <Spline
            className="spline"
            scene="https://prod.spline.design/C8mq0SleGEpmhJBV/scene.splinecode"
          />
        </div>
      </div>
      <div className="pokeball">
        <div className="pokeball__button"></div>
      </div>
    </>
  );
};

export default Home;
