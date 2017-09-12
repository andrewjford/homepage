import React from 'react';
import npePic from './images/npe_c.png';
import auditPic from './images/audit_c.png';
import expensePic from './images/expense_c.png';
import headshot from './images/headshot2.jpg'

const Projects = props =>
  <div>
    <p className="center-text">
      <img className="headshot" src={headshot} alt="Headshot" />
    </p>
    <h1 className="h1-index">Projects</h1>
    <h2>National Park Explorer</h2>
    <div>
      <a href="http://natl-park-explorer.netlify.com">
        <img className="project-image" src={npePic} />
      </a>
    </div>
    <p>A map based web app that allows users to explore U.S. National Parks.</p>
    <a className="trad-link" href="https://github.com/andrewjford/national-park-explorer-react">GitHub</a>
    <a className="trad-link" href="http://natl-park-explorer.netlify.com">Demo</a>
    <p>Some of the tools used:</p>
    <ul>
      <li>React</li>
      <li>Redux</li>
      <li>Ruby on Rails API</li>
      <li>U.S. National Park Service Data API</li>
      <li>Leaflet open-source JavaScript library</li>
      <li>PostgreSQL</li>
    </ul>
    <h2>AuditRequest</h2>
    <div>
      <a href="http://auditrequest.herokuapp.com">
        <img className="project-image" src={auditPic} width="100%"/>
      </a>
    </div>
    <p>A project management and communications tool for audit firms and their clientele.</p>
    <a className="trad-link" href="https://github.com/andrewjford/audit-request-manager">GitHub</a>
    <a className="trad-link" href="http://auditrequest.herokuapp.com">Demo</a>
    <p>Some of the tools used:</p>
    <ul>
      <li>Ruby on Rails</li>
      <li>jQuery</li>
      <li>Handlebars</li>
      <li>Devise</li>
      <li>Pundit</li>
      <li>OmniAuth</li>
      <li>PostgreSQL</li>
    </ul>
    <h2>Expense Tracker</h2>
    <div>
      <a href="http://oozetracker.herokuapp.com">
        <img className="project-image" src={expensePic} width="100%"/>
      </a>
    </div>
    <p>A web app to record personal expenses by category and track spending habits.</p>
    <a className="trad-link" href="https://github.com/andrewjford/expense-tracker">GitHub</a>
    <a className="trad-link" href="https://oozetracker.herokuapp.com/">Demo</a>
    <p>Some of the tools used:</p>
    <ul>
      <li>Sinatra</li>
      <li>JavaScript</li>
      <li>PostgreSQL</li>
    </ul>
  </div>

export default Projects;
