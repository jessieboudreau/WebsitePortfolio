import React, { Component } from 'react'
import './Projects.css';
import ProjectLink from '../ProjectLink/ProjectLink';

import batterydesignThumbnail from './../../img/project/batterydesign-thumbnail.png'
import bmstestingboardThumbnail from './../../img/project/cellboardtester-thumbnail.png'
import wireharnessThumbnail from './../../img/WiringHarness/original.png';
import assemblyThumbnail from './../../img/project/accumulator-thumbnail.png';

import temp from './../../img/project/aerodynamic-thumbnail.png';

export class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {
            projects:[
                {
                    id: 0,
                    name:"Battery Design",
                    type:"modelling",
                    link:"/accumulator-assembly",
                    thumbnail:batterydesignThumbnail},
                {
                    id: 1,
                    name:"Wiring Harness",
                    type:"modelling",
                    link:"/wiring-harness",
                    thumbnail:wireharnessThumbnail},
                {
                    id: 2,
                    name:"PCB Development",
                    type:"modelling",
                    link:"/pcb-development",
                    thumbnail:bmstestingboardThumbnail},            
            ]
        }
    }
    render() {
        return (
            <div className="projects-container">
                {this.state.projects.map(project => (
                    <div className="projects-project-link-container">
                        <ProjectLink
                        project={project}
                        />
                    </div>))}
                    {/* <div className="projects-project-link-container"></div>
                    <div className="projects-project-link-container"></div> */}
            </div>
        )
    }
}

export default Projects