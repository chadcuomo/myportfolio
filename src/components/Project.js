import React from 'react'
import Button from './Button'
import gsap from 'gsap'
import { ScrollTrigger, Power1 } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)


class Project extends React.Component {

   scrollProject = () => {
    gsap.fromTo(".project-container", {
      y: 100,
      opacity: 0
     },
     {
      scrollTrigger: ".project-container",
       y: 0,
       opacity: 1,
       duration: 1,
       delay: .5,
       stagger: .3,
       ease: Power1.easeOut,
     })
    }

    componentDidMount() {
      this.scrollProject()
    }

  render() {
      const { image, name, tools, desc, website, github } = this.props.details
    return (
      <div className="project-container">
        <div className="project-details-container">
          <div className="project-details-content">
            <div className="project-title-container">
              <p className="project-title">{name}</p>
              <p className="project-subtitle">{tools}</p>
            </div>
            <div className="project-content-container">
              <div className="project-desc-container">
                <p className="project-desc">{desc}</p>
              </div>
              <div className="project-button-container">
                <a href={website}><Button buttonText={"Visit Site"} /></a>
                <a href={github}><button className="main-button github">GitHub</button></a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-image-container">
        <a href={website}><img src={image} alt={name} className="project-image"/></a>
        </div>
         
      </div>
    )
  }
}

export default Project

/*
<img src={image} alt={name} className="project-image"/>
            <div className="project-details-container">
                <div className="project-details-content">
                    <div className="project-title-container">
                        <p className="project-title">{name}</p>
                        <p className="project-subtitle">{tools}</p>
                    </div>
                    <div className="project-content-container">
                        <div className="project-desc-container">
                            <p className="project-desc">{desc}</p>
                        </div>
                        <div className="project-button-container">
                            <a href={website}><Button buttonText={"Visit Site"} /></a>
                        </div>
                    </div>
                </div>
              
            </div>    
          </div>
          */