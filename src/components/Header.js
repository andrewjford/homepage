import React from 'react';
import Link from 'gatsby-link'

const Header = (props) => {
  if(props.path === "/"){
    return <div style={{height: "1.45rem"}}></div>;
  }
  else if (props.path === "/about") {
    return <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><a href="https://andrewjford.github.io/">Blog</a></li>
          <li><a href={__PATH_PREFIX__ + 'resume_ford.pdf'}>Resume</a></li>
        </ul>
      </nav>
    </div>
  }
  else if (props.path === "/projects") {
    return <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="https://andrewjford.github.io/">Blog</a></li>
          <li><a href={__PATH_PREFIX__ + 'resume_ford.pdf'}>Resume</a></li>
        </ul>
      </nav>
    </div>
  }
  else {
    return <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="https://andrewjford.github.io/">Blog</a></li>
          <li><a href={__PATH_PREFIX__ + 'resume_ford.pdf'}>Resume</a></li>
        </ul>
      </nav>
    </div>
  }
}

export default Header;
