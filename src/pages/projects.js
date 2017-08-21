import React from 'react';
import npePic from './npe.png';
import auditPic from './audit.png';
import expensePic from './expense.png';
import headshot from './headshot2.jpg'

const Projects = props =>
  <div>
    <p className="center-text">
      <img className="headshot" src={headshot} alt="Headshot" />
    </p>
    <h1 className="h1-index">Projects</h1>
    <h2>National Park Explorer</h2>
    <a href="http://natl-park-explorer.herokuapp.com">
      <div className="image-container">
        <img className="project-image" src={npePic} />
      </div>
    </a>
    <p>A map based web app that allows users to explore U.S. National Parks.</p>
    <h2>AuditRequest</h2>
    <a href="http://auditrequest.herokuapp.com">
      <img className="project-image" src={auditPic} width="100%"/>
    </a>
    <p>A project management and communications tool for audit firms and their clientele.</p>
    <h2>Expense Tracker</h2>
    <a href="http://oozetracker.herokuapp.com">
      <img className="project-image" src={expensePic} width="100%"/>
    </a>
    <p>A web app to record personal expenses by category and track spending habits.</p>
  </div>

export default Projects;
