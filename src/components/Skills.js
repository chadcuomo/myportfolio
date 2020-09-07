import React from 'react'
import LargeTitle from './LargeTitle'
import SingleSkill from './SingleSkill'
import skillsobj from '../skillsobj'

class Skills extends React.Component {
  state = {
    mySkills: {}
}

loadSkills = () => {
    this.setState({ mySkills: skillsobj })
}

componentDidMount() {
    this.loadSkills()
}

  render() {
    return (
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
    )
  }
}

export default Skills