import React from 'react';
import headshot from './headshot2.jpg';

const About = () =>
  <div>
    <p className="center-text">
      <img className="headshot" src={headshot} alt="Headshot" />
    </p>
    <p>I am a full stack web developer with the majority of my experience in Ruby on Rails and JavaScript. I am currently enrolled in Flatiron School's Full Stack Web Development online program. I am also a CPA with over five years of public accounting audit experience.</p>
    <h2>Skills</h2>
    <ul class="skill-list">
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
