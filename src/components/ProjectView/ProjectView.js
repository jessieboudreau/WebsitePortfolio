import React, { Component } from 'react'
import './ProjectView.css';
import Projects from '../Projects/Projects';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export class ProjectView extends Component {
    render() {
        return (
            <div className="project-container">
                <div className="intro-paragraph-container">
                    <p className="intro-paragraph">
                        Welcome to my portfolio.  Outlined below are some of the projects I have worked on while on MAC Formula Electric - A fully student run team working to design and manufacture a fully electric, formula style racecar.
                    </p>
                </div>
                <div className="project-name-container">
                    <h1 className="title-name">Projects
                        {/* <span className="subtitle-name">></span>
                        <span className="subtitle-name">Tile View</span> */}
                    </h1>
                </div>
                {/* Control buttons
                <div id="myBtnContainer">
                    <button className="btn active" onclick="filterSelection('all')"> Show All</button>
                    <button className="btn" onclick="filterSelection('model')">Modelling</button>
                    <button className="btn" onclick="filterSelection('outreach')">Outreach</button>
                    <button className="btn" onclick="filterSelection('programming')">Programming</button>
                    <button className="btn" onclick="filterSelection('sim')">Simulation</button>
                </div> */}
                <Projects />
                
            </div>
        )
    }
}

export default ProjectView
