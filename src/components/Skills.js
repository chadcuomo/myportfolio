import React from 'react'
import LargeTitle from './LargeTitle'
import SingleSkill from './SingleSkill'

class Skills extends React.Component {
  render() {
    return (
      <section className="skills-container">
          <div className="content-container">
            <div className="skills-title-container">
                <LargeTitle titleText="Skills" />    
            </div>
            <div className="skills-inner-content-container">
                <div className="individual-skill-container">
                    <SingleSkill />
                </div>
            </div>
          </div>
      </section>
    )
  }
}

export default Skills