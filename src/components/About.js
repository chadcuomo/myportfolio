import React from 'react'
import LargeTitle from './LargeTitle'
import gsap from 'gsap'
import { ScrollTrigger, Power1 } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

class About extends React.Component {

  scrollAbout = () => {
    gsap.from(".about-container-title", {
      scrollTrigger: ".about-container-title",
      opacity: 0,
      x: -150,
      duration: 1,
      ease: Power1.easeOut
     })
     gsap.from(".about-inner-content-title", {
      scrollTrigger: ".about-inner-content-title",
      opacity: 0,
      y: 50,
      duration: 1,
      ease: Power1.easeOut,
      delay: .25
     })
     gsap.from(".about-inner-content-text", {
      scrollTrigger: ".about-inner-content-text",
      opacity: 0,
      y: 50,
      duration: 1,
      delay: .25,
      ease: Power1.easeOut
     })
     gsap.from(".about-img", {
      scrollTrigger: ".about-img",
      opacity: 0,
      y: 50,
      duration: 1,
      ease: Power1.easeOut,
      delay: .5
     })
    }

    componentDidMount() {
      this.scrollAbout()
    }

  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default About