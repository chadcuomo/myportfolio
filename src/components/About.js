import React from 'react'
import LargeTitle from './LargeTitle'

class About extends React.Component {
  render() {
    return (
      <section className="about-container">
          <div className="about-container-content">
              <div className="about-container-title">
                  <LargeTitle titleText="About" />
              </div>
              <div className="about-inner-content">
                  <div className="about-inner-content-title">
                    <h1>Who Am I?</h1>      
                  </div>
                  <div className="about-inner-content-text">
                    <p>
                        I am a front-end developer with a background in design. 
                        I am a driven problem solver with a strong attention to 
                        detail. I have passion for creating functional web applications 
                        with a beautiful user experience and design.
                    </p>
                  </div> 
             </div>
             <div className="about-img-container">
                 <img className="about-img" src="/images/me.jpg" alt="me" />
             </div>
          </div>
      </section>
    )
  }
}

export default About