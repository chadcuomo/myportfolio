import React from 'react'
import SmallLogo from './SmallLogo'

class Nav extends React.Component {

  toggleNav() {
    const navlinks = document.querySelector('.nav-link-container')
    navlinks.classList.toggle('active')
  }

  render() {
    return (
      <nav className="navbar">
          <div className="nav-content-container">
              <div className="nav-logo-container">
                <SmallLogo />
              </div>
              <button className="toggle-button" onClick={this.toggleNav}>
              </button>
              <div className="nav-link-container">
                <ul>
                  <li>
                    <a href=".home">Home</a>
                  </li>
                  <li>
                    <a href=".home">About</a>
                  </li>
                  <li>
                    <a href=".home">Portfolio</a>
                  </li>
                  <li>
                    <a href=".home">Skills</a>
                  </li>
                  <li>
                    <a href=".home">Contact</a>
                  </li>
                </ul>
              </div>
          </div>
      </nav>
    )
  }
}

export default Nav