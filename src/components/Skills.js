import React from 'react'
import LargeTitle from './LargeTitle'
import SingleSkill from './SingleSkill'
import skillsobj from '../skillsobj'
import gsap from 'gsap'
import { ScrollTrigger, Power1 } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

class Skills extends React.Component {
  state = {
    mySkills: {}
}

loadSkills = () => {
    this.setState({ mySkills: skillsobj })
}

scrollSkill = () => {
  gsap.from(".skills-title-container", {
    scrollTrigger: ".skills-title-container",
    opacity: 0,
    x: 150,
    duration: 1,
    ease: Power1.easeOut,
    delay: .5
   })
  }

componentDidMount() {
    this.loadSkills()
    this.scrollSkill()
}

  render() {
    return (
      <div>
      <section className="skills-container">
          <div className="content-container">
            <div className="skills-title-container">
                <LargeTitle titleText="Skills" />    
            </div>
            <div className="skills-inner-content-container">
                  {Object.keys(this.state.mySkills).map(key =>
                    <SingleSkill
                        key={key}
                        index={key}
                        details={this.state.mySkills[key]}
                    />
                  )}
                
            </div>
          </div>
      </section>
      </div>
    )
  }
}

export default Skills