import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Me Img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <IoSchoolOutline className="about__icon" />
              <h5>Degree</h5>
              <small>Graduated in IT from FPT University</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Working With ReactJS</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>20+</small>
            </article>
          </div>
          <p>
            Have knowledge and skills to use: <br />
            - REST APIs, MS SQL, Web servers, Cloud (Azure Portal), Firebase. <br />
            - Good use of Ant Design, Ant Design Pro, MUI, Bootstrap. <br />
            - HTML5, CSS, Javascript/TypeScript. <br />
            - Experience in using Github, Github Desktop, SourceTree for project
            management. <br />
            - Virtual Reality 360 <br />
            <br />  
            Spirit/Attitude: <br />
            - Hardworking, eager to learn <br />
            - Good communication (listening, presenting) <br />
            - Proactive, high responsibility at work <br />
            - Have a disciplined spirit and serious professional ethics <br />
            - Good thinking <br />
            - Know how to think about the collective, about the common goal <br />
            - Ability to work independently and in a team...
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
