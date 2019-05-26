import React from 'react';
import headshot from './images/headshot2.jpg';

const About = () =>
  <div className="narrow-container">
    <p className="center-text">
      <img className="headshot" src={headshot} alt="Headshot" />
    </p>
    <p className="about-p">I am a software developer with the majority of my experience in Salesforce development and Javascript. I work for Bluewolf, an IBM company that provides consulting services for Salesforce.</p>
    <p className="about-p">Day to day I do Salesforce development with Apex, Lightning Web Components and some Express/Node. For side projects I enjoy working in Javascript using React/React Native and Express.</p>
    <h2>Skills</h2>
    <ul className="skill-list">
      <li>Javascript</li>
      <li>Salesforce Lightning</li>
      <li>Lightning Web Components</li>
      <li>React</li>
      <li>Apex</li>
      <li>Express</li>
      <li>Node</li>
      <li>TypeScript</li>
      <li>React Native</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>SQL</li>
      <li>Git</li>
      <li>API Development</li>
      <li>Ruby</li>
      <li>Ruby on Rails</li>
      <li>jQuery</li>
    </ul>
    <h2>Education</h2>
    <p>Flatiron School - August 2017</p>
    <ul><li>Full Stack Web Development, Ruby on Rails and Javascript online program</li></ul>
    <p>Florida Atlantic University - Boca Raton, FL - May 2011</p>
    <ul>
      <li>Master of Accounting and Bachelor of Business Administration with Scholars Distinction</li>
      <li>Graduated Summa Cum Laude</li>
    </ul>
    <p>University of Florida - Gainesville, FL - May 2008</p>
    <ul>
      <li>Bachelor of Arts in History</li>
    </ul>
  </div>

export default About;
