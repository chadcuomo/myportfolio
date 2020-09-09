import React from 'react'
import LargeTitle from './LargeTitle'
import Form from './Form'
import gsap from 'gsap'
import { Bounce, ScrollTrigger, Power1 } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

class Contact extends React.Component {

  staggerTitle = () => {
    gsap.from(".contact-left-header-container", {
      scrollTrigger: ".contact-left-header-container",
      delay: .5,
      opacity: 0,
      x: -50,
      duration: 1,
      ease: Bounce.easeOut,
     })
     gsap.from(".contact-title-container", {
      scrollTrigger: ".contact-title-container",
      opacity: 0,
      x: 150,
      duration: 1,
      ease: Power1.easeOut,
      delay: 0
     })
     gsap.from(".contact-left-form-container", {
      scrollTrigger: ".contact-left-form-container",
      delay: 1,
      opacity: 0,
      scale: .2,
      x: -50,
      duration: .75,
      ease: Power1.easeOut,
     })
     gsap.from(".social-button-container", {
      scrollTrigger: ".social-button-container",
      opacity: 0,
      duration: 1.5,
      ease: Power1.easeOut,
      delay: 0.25
     })
     gsap.from(".copyright-container", {
      scrollTrigger: ".copyright-container",
      opacity: 0,
      duration: 1.5,
      ease: Power1.easeOut,
      delay: 0.25
     })
  }

  componentDidMount() {
    this.staggerTitle()
  }

  render() {
    return (
      <section className="contact-container">
          <div className="content-container">
            <div className="contact-content-container">
                <div className="contact-left-container">
                    <div className="contact-left-header-container">
                        <h1>Have a <span className="pink">question</span> or
                        <br />
                        want to <span className="pink">work</span>
                        <br />
                        together<span className="pink">?</span>
                        </h1>
                    </div>
                    <div className="contact-left-form-container">
                      <Form />
                    </div>
                </div>
                <div className="contact-right-container">
                    <div className="contact-title-container">
                        <LargeTitle titleText='Contact' />
                    </div>
                </div>
            </div>
            <div className="contact-bottom-container">
              <div className="social-button-container">
                <button className="github-button social" />
                <button className="twitter-button social" />
                <button className="linkedin-button social" />
              </div>
              <div className="copyright-container">
                <p className="copyright">Chad Cuomo <span className="pink">&#169; 2020</span></p>
              </div>
            </div>
          </div>
      </section>
    )
  }
}

export default Contact