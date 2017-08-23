import React from 'react'
import headshot from './images/headshot2.jpg'
import Link from 'gatsby-link'

import 'font-awesome/scss/font-awesome.scss'

const LowNav = () => {
  return (
    <div>
     <nav className="low-navbar">
       <ul>
         <li className="zoom"><Link to="/projects">Projects</Link></li>
         <li className="zoom"><Link to="/about">About</Link></li>
         <li className="zoom"><a href="https://andrewjford.github.io/">Blog</a></li>
         <li className="zoom"><a href={__PATH_PREFIX__ + 'resume_ford.pdf'}>Resume</a></li>
       </ul>
     </nav>
   </div>
  )
}

const IndexPage = () =>
  <div className="narrow-container">
    <p className="center-text">
      <img className="headshot" src={headshot} alt="Headshot" />
    </p>
    <h1 className="h1-index">Andrew Ford</h1>
    <p className="light-text center-text">Web Developer currently enrolled in Flatiron School's online program.</p>
    <div className="icon-bar">
      <a href="http://linkedin.com/in/andrew-j-ford/"><i className="fa fa-linkedin-square"></i></a>
      <a href="http://github.com/andrewjford"><i className="fa fa-github"></i></a>
      <a href="mailto:ajoeford@gmail.com"><i className="fa fa-envelope"></i></a>
    </div>
    <LowNav />
  </div>

export default IndexPage
