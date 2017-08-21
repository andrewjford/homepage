import React from 'react'
import headshot from './headshot2.jpg'

const IndexPage = () =>
  <div>
    <p className="center-text">
      <img className="headshot" src={headshot} alt="Headshot" />
    </p>
    <h1 className="h1-index">Andrew Ford</h1>
    <p>Web Developer currently enrolled in Flatiron School's online program.</p>
  </div>

export default IndexPage
