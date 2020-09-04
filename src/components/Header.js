import React from 'react'
import LargeLogo from './LargeLogo'
import SmallC from './SmallC'
import Button from './Button'

class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
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
            </div>
        </div>
      </header>
    )
  }
}

export default Header
