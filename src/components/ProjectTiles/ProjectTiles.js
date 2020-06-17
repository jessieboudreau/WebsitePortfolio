import React, { Component } from 'react'
import Projects from './../../components/ProjectTiles/Projects'
import './Projects.css'

export class ProjectTiles extends Component {

    render() {

        return (

            <div className="project-container">
                <Projects />
            </div>
            
        )
    }
}

export default ProjectTiles