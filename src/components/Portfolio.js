import React from 'react'
import LargeTitle from './LargeTitle'
import Project from './Project'
import projects from '../projects'
import gsap from 'gsap'
import { ScrollTrigger, Power1 } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

class Portfolio extends React.Component {
    state = {
        myProjects: {}
    }

    loadProjects = () => {
        this.setState({ myProjects: projects })
    }

    scrollPortfolio = () => {
        gsap.from(".portfolio-title-container", {
          scrollTrigger: ".portfolio-title-container",
          opacity: 0,
          x: -150,
          duration: 1,
          ease: Power1.easeOut,
          delay: 0.25
         })
        }

    componentDidMount() {
        this.loadProjects()
        this.scrollPortfolio()
    }
    render() {
        return (
        <section className="portfolio-container">
            <div className="content-container">
                <div className="portfolio-title-container">
                    <LargeTitle titleText="Portfolio" />
                </div>
                <div className="portfolio-mobile-click">
                    <p>Click to learn more <span className="pink">&#8595;</span></p>
                </div>
                <div className="portfolio-projects-container">
                {Object.keys(this.state.myProjects).map(key =>
                    <Project
                        key={key}
                        index={key}
                        details={this.state.myProjects[key]}
                    />
                )}
                </div>
            </div>
        </section>
        )
    }
}

export default Portfolio