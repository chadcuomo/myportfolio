import React from 'react'
import LargeLogo from './LargeLogo'
import SmallC from './SmallC'
import Button from './Button'
import ParticleComponent from "./ParticleComponent";
import LargeLogoOutline from './LargeLogoOutline';
import '../css/logoanimate.css';

class Header extends React.Component {

  render() {
    return (
      <header className="header-container">
        <ParticleComponent />
        <div className="header-content-container">
            <div className="header-left-content-container">
                <div className="header-title"> 
                    <h1>
                        Hi, 
                        <br />
                        I'm <SmallC />had,
                        <br />
                         web developer.
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
