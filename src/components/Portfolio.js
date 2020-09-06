import React from 'react'
import LargeTitle from './LargeTitle'
import Project from './Project'
import projects from '../projects'

class Portfolio extends React.Component {
    state = {
        myProjects: {}
    }

    loadProjects = () => {
        this.setState({ myProjects: projects })
    }

    componentDidMount() {
        this.loadProjects()
    }
    render() {
        return (
        <section className="portfolio-container">
            <div className="content-container">
                <div className="portfolio-title-container">
                    <LargeTitle titleText="Portfolio" />
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