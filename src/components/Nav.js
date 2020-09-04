import React from 'react'
import SmallLogo from './SmallLogo'

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar">
          <div className="nav-content-container">
              <div className="nav-logo-container">
                <SmallLogo />
              </div>
              <div className="nav-link-container">
                  <a href=".home">Home</a>
                  <a href=".home">About</a>
                  <a href=".home">Portfolio</a>
                  <a href=".home">Skills</a>
                  <a href=".home">Contact</a>
              </div>
          </div>
      </nav>
    )
  }
}

export default Nav