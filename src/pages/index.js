import React from 'react'
import headshot from './headshot2.jpg'
import Link from 'gatsby-link'

const LowNav = () => {
  return (
    <div>
     <nav className="low-navbar">
       <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/projects">Projects</Link></li>
         <li><Link to="/about">About</Link></li>
       </ul>
     </nav>
   </div>
  )
}

const IndexPage = () =>
  <div>
    <p className="center-text">
      <img className="headshot" src={headshot} alt="Headshot" />
    </p>
    <h1 className="h1-index">Andrew Ford</h1>
    <p>Web Developer currently enrolled in Flatiron School's online program.</p>
    <LowNav />
  </div>

export default IndexPage
