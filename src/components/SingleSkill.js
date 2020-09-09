import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, Power1 } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

class SingleSkill extends React.Component {

  scrollSkill = () => {
    gsap.fromTo(".single-skill-container", {
      
      y: 50,
      opacity: 0
     },
     {
      scrollTrigger: ".single-skill-container",
       y: 0,
       opacity: 1,
       duration: .5,
       delay: 1,
       stagger: .1,
       ease: Power1.easeOut,
     })
    }

    componentDidMount() {
      this.scrollSkill()
    }

  render() {
    const { name, image, imageName } = this.props.details
    return (
      <div className="single-skill-container">
          <div className="single-skill-text-container">
              <p className="single-skill-text">{name}</p>
          </div>
          <div className="single-skill-bottom-container">
              <div className="single-skill-hr-container">
                  <hr />
              </div>
              <div className="single-skill-image-container">
                <img src={image} alt={imageName} className="single-skill-image" />
              </div>
          </div>
      </div>
    )
  }
}

export default SingleSkill