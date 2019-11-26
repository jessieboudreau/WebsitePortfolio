import React, { Component } from 'react'
import './ProjectView.css';
import Projects from '../Projects/Projects';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export class ProjectView extends Component {
    render() {
        return (
            <div>
                <div className="intro-paragraph-container">
                        <h1 className="title-name">About Me</h1>
                        <p className="intro-paragraph">
                        Experienced Engineering Team Leader with a demonstrated history of working in the automotive industry. 
                        Skilled in Electrical Engineering, Leadership, Test Automation and Manufacturing Design. Fluent in English 
                        with professional working proficiency in French. Strong engineering professional working towards a Bachelor 
                        Technology – B.Tech focused in Power & Energy Engineering from McMaster University. 
                        </p>
                </div>
                <div className="project-container">
                    <Projects />
                </div>
            </div>
        )
    }
}

export default ProjectView
