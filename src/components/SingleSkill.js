import React from 'react'

class SingleSkill extends React.Component {
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