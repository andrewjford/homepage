import React from 'react';
import headshot from './images/headshot2.jpg';

const About = () =>
  <div className="narrow-container">
    <p className="center-text">
      <img className="headshot" src={headshot} alt="Headshot" />
    </p>
    <p className="about-p">I am a full stack web developer with the majority of my experience in Ruby on Rails and JavaScript. I worked in public accounting for over five years as an auditor and still hold a CPA license in the state of Washington. </p>
    <p className="about-p">For approximately two years I have been learning coding and software development through online classes and self-study. This past summer I was enrolled in Flatiron School’s Online Web Development Program where I learned Ruby on Rails and JavaScript. </p>
    <h2>Skills</h2>
    <ul className="skill-list">
      <li>Ruby</li>
      <li>Ruby on Rails</li>
      <li>JavaScript</li>
      <li>jQuery</li>
      <li>ReactJS</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Git</li>
      <li>Python</li>
      <li>SQL</li>
      <li>TDD</li>
    </ul>
    <h2>Education</h2>
    <p>Flatiron School - 2017</p>
    <ul><li>Full Stack Web Development, Ruby on Rails and JavaScript online program</li></ul>
    <p>Florida Atlantic University - Boca Raton, FL - May 2011</p>
    <ul>
      <li>Master of Accounting and Bachelor of Business Administration with Scholars Distinction</li>
      <li>Graduated Summa Cum Laude</li>
    </ul>
  </div>

export default About;
