import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import './index.css'


class TemplateWrapper extends React.Component {
  constructor({ children }){
    super();
    this.children = children;
  }

  render() {
    return <div>
      <Helmet
        title="Andrew Ford"
        meta={[
          { name: 'description', content: 'Personal' },
          { name: 'keywords', content: 'personal, portfolio' },
        ]}
      />
      <Header path={this.props.location.pathname}/>
      <main>
        {this.children()}
      </main>
      <Footer />
    </div>
  }
}


TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
