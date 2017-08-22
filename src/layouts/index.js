import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Footer from '../pages/Footer.js'
import Header from '../components/Header.js'
import './index.css'


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
    <Footer />
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
