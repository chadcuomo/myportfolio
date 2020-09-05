import React from 'react'
import Button from './Button'


class Project extends React.Component {
  render() {
      const { image, name, tools, desc } = this.props.details
    return (
      <div className="project-container">
          <div className="project-image-container">
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
                            <Button buttonText={"Visit Site"} />
                        </div>
                    </div>
                </div>
              
            </div>    
          </div>
         
      </div>
    )
  }
}

export default Project