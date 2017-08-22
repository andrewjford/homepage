import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => {
  if(window.location.pathname === "/"){
    return <div style={{height: "1.45rem"}}></div>;
  }
  else {
    return <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  }
}

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Andrew J. Ford"
      meta={[
        { name: 'description', content: 'Personal' },
        { name: 'keywords', content: 'personal, portfolio' },
      ]}
    />
    <Header />
    <main>
      {children()}
    </main>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
