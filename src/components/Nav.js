import React from 'react'
import SmallLogo from './SmallLogo'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

class Nav extends React.Component {

  scrollNav = () => {
    gsap.from(".nav-link", {
      scrollTrigger: ".nav-link",
      opacity: 0,
      x: -5,
      duration: 0.4,
      stagger: 0.08,
    })
    gsap.from(".nav-logo-container", {
      scrollTrigger: ".nav-logo-container",
      opacity: 0,
      x: -5,
      duration: 0.4,
    })
    
  }

  componentDidMount() {
    this.scrollNav();
  }

  toggleNav() {
    const navlinks = document.querySelector('.nav-link-container')
    navlinks.classList.toggle('active')
  }

  scrollToAbout = () => {
    const about = document.querySelector('.about-container');
    about.scrollIntoView({behavior: "smooth"})
  }

  scrollToHome = () => {
    const header = document.querySelector('.header-container');
    header.scrollIntoView({behavior: "smooth"})
  }

  scrollToPortfolio = () => {
    const portfolio = document.querySelector('.portfolio-container');
    portfolio.scrollIntoView({behavior: "smooth"})
  }

  scrollToSkills = () => {
    const skills = document.querySelector('.skills-container');
    skills.scrollIntoView({behavior: "smooth"})
  }

  scrollToContact = () => {
    const contact = document.querySelector('.contact-container');
    contact.scrollIntoView({behavior: "smooth"})
  }

  render() {
    return (
      <nav className="navbar">
          <div className="nav-content-container">
              <div className="nav-logo-container" onClick={this.scrollToHome}>
                <SmallLogo className="nav-logo"/>
              </div>
              <button className="toggle-button" onClick={this.toggleNav}>
              </button>
              <div className="nav-link-container">
                <ul>
                  <li>
                    <button onClick={this.scrollToHome} className="nav-link">Home</button>
                  </li>
                  <li>
                    <button onClick={this.scrollToAbout} className="nav-link">About</button>
                  </li>
                  <li>
                    <button onClick={this.scrollToPortfolio} className="nav-link">Portfolio</button>
                  </li>
                  <li>
                    <button onClick={this.scrollToSkills} className="nav-link">Skills</button>
                  </li>
                  <li>
                    <button onClick={this.scrollToContact} className="nav-link">Contact</button>
                  </li>
                </ul>
              </div>
          </div>
      </nav>
    )
  }
}

export default Nav