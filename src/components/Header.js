import React from 'react'
import LargeLogo from './LargeLogo'
import SmallC from './SmallC'
import Button from './Button'
import ParticleComponent from "./ParticleComponent";
import LargeLogoOutline from './LargeLogoOutline';
import '../css/logoanimate.css';
import gsap from 'gsap'
import { Bounce } from "gsap/all";

class Header extends React.Component {
  
  staggerHeader = () => {
    gsap.from("span", {
      delay: 0.65,
      opacity: 0,
      scale: 0.5,
      duration: 0.15,
      rotate: '-15deg',
      stagger: 0.08,
       //space each element's animation out by 0.5 seconds
       ease: Bounce.easeOut,
    })
    gsap.from(".header-text", {
      delay: 0.75,
      opacity: 0,
      duration: 0.75
    })
    gsap.from(".header-button", {
      delay: 0.75,
      opacity: 0,
      duration: 0.75
    })
  }

  componentDidMount() {
    this.staggerHeader()
  }

  render() {
    return (
      <header className="header-container">
        <ParticleComponent />
        <div className="header-content-container">
            <div className="header-left-content-container">
                <div className="header-title"> 
                    <h1 aria-label="Hi, I'm had, web developer." className="blast-root">
                        <span className="blast" aria-hidden="true">H</span>
                        <span className="blast" aria-hidden="true">i</span>
                        <span className="blast" aria-hidden="true">,</span>
                        <br />
                        <span className="blast" aria-hidden="true">I</span>
                        <span className="blast" aria-hidden="true">'</span>
                        <span className="blast" aria-hidden="true">m</span>
                        <span>&#32;</span>
                        <span className="blast"><SmallC /></span>
                        <span className="blast" aria-hidden="true">h</span>
                        <span className="blast" aria-hidden="true">a</span>
                        <span className="blast" aria-hidden="true">d</span>
                        <span className="blast" aria-hidden="true">,</span>
                        <br />
                        <span className="blast" aria-hidden="true">W</span>
                        <span className="blast" aria-hidden="true">e</span>
                        <span className="blast" aria-hidden="true">b</span>
                        <span>&#32;</span>
                        <div className="developer">
                        <span className="blast" aria-hidden="true">D</span>
                        <span className="blast" aria-hidden="true">e</span>
                        <span className="blast" aria-hidden="true">v</span>
                        <span className="blast" aria-hidden="true">e</span>
                        <span className="blast" aria-hidden="true">l</span>
                        <span className="blast" aria-hidden="true">o</span>
                        <span className="blast" aria-hidden="true">p</span>
                        <span className="blast" aria-hidden="true">e</span>
                        <span className="blast" aria-hidden="true">r</span>
                        <span className="blast" aria-hidden="true">.</span>
                        </div>
                    </h1>
                </div>
                <div className="header-text">
                    <p>Front-End Developer / UI Enthusiast / Freelancer</p>
                </div>
                <div className="header-button">
                    <Button buttonText={"View My Work"} />
                </div>
            </div>
            <div className="header-logo-container">
                <LargeLogo />
                <LargeLogoOutline />
            </div>
        </div>
      </header>
    )
  }
}

export default Header
