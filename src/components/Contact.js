import React from 'react'
import LargeTitle from './LargeTitle'

class Contact extends React.Component {

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
                </div>
                <div className="contact-right-container">
                    <div className="contact-title-container">
                        <LargeTitle titleText='Contact' />
                    </div>
                </div>
            </div>
            <div className="contact-bottom-container"></div>
          </div>
      </section>
    )
  }
}

export default Contact