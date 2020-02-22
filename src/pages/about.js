import React from "react";
import headshot from "./images/headshot2.jpg";

const About = () => (
  <div className="narrow-container">
    <p className="center-text">
      <img className="headshot" src={headshot} alt="Headshot" />
    </p>
    <p className="about-p">
      I am a software developer with the majority of my experience in
      JavaScript, Node.js and Salesforce development. I work for Bluewolf, an
      IBM company, developing solutions on the Salesforce and Heroku platforms.
    </p>
    <p className="about-p">
      Day to day I work primarily with Node.js, Apex and Lightning Web
      Components. For side projects I enjoy working in TypeScript using React
      and React Native.
    </p>
    <h2>Skills</h2>
    <ul className="skill-list">
      <li>JavaScript</li>
      <li>Node</li>
      <li>TypeScript</li>
      <li>Express</li>
      <li>Salesforce Lightning</li>
      <li>Lightning Web Components</li>
      <li>Apex</li>
      <li>React</li>
      <li>React Native</li>
      <li>Redis</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>PostgreSQL</li>
      <li>Git</li>
      <li>API Development</li>
      <li>Heroku</li>
      <li>Ruby on Rails</li>
      <li>jQuery</li>
    </ul>
    <h2>Education</h2>
    <p>Flatiron School - August 2017</p>
    <ul>
      <li>
        Full Stack Web Development, Ruby on Rails and JavaScript online program
      </li>
    </ul>
    <p>Florida Atlantic University - Boca Raton, FL - May 2011</p>
    <ul>
      <li>
        Master of Accounting and Bachelor of Business Administration with
        Scholars Distinction
      </li>
      <li>Graduated Summa Cum Laude</li>
    </ul>
    <p>University of Florida - Gainesville, FL - May 2008</p>
    <ul>
      <li>Bachelor of Arts in History</li>
    </ul>
  </div>
);

export default About;
