import React from 'react';
import headshot from './headshot2.jpg';

const About = () =>
  <div className="narrow-container">
    <p className="center-text">
      <img className="headshot" src={headshot} alt="Headshot" />
    </p>
    <p className="about-p">I am a full stack web developer with the majority of my experience in Ruby on Rails and JavaScript. I worked in public accounting for over five years as an auditor. </p>
    <p className="about-p">For approximately two years I have been learning coding and software development through online classes and self-study. The past few months I have been enrolled in Flatiron School’s Online Web Development program where I have been learning Ruby on Rails and JavaScript. </p>
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
  </div>

export default About;
