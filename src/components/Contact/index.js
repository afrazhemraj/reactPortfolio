import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import backgroundPhoto from "../../assets/images/e7.jpg";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();
  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_15tjkih",
        "template_428882z",
        refForm.current,
        "GvFglqmnj_eS4wUml"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              idx={25}
            />
          </h1>
          <p>
            I am actively looking for <span>Spring/Summer 2023 </span>
            internships in <span>software development</span>. If you like what
            you see or have any questions, feel free to reach out using the form
            below!
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  ></input>
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  ></input>
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  ></input>
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="Send"
                  ></input>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="backPhoto">
          <img src={backgroundPhoto} alt="E7" />
        </div>
      </div>

      <div className="pokeball">
        <div className="pokeball__button"></div>
      </div>
    </>
  );
};
export default Contact;
