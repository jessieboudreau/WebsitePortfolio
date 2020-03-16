import React, { Component } from 'react';
import './Projects.css';
import ProjectLink from '../ProjectLink/ProjectLink';

// Project thumbnails
import batterydesignThumbnail from './../../img/project/batterydesign-thumbnail.png';
import bmstestingboardThumbnail from './../../img/project/cellboardtester-thumbnail.png';
import wireharnessThumbnail from './../../img/WiringHarness/original.png';
import awgprojectThumbnail from './../../img/project/watergenerator-thumbnail.jpg';
import capstoneThumbnail from './../../img/battery-design-capstone/iso.png';

const buttons = [
    {
        id: 0,
        label: 'Conestoga College',
        btnClass: 'btn'},
    {
        id: 1,
        label: 'MAC Formula Electric',
        btnClass: 'btn'},
    {
        id: 2,
        label: 'McMaster University',
        btnClass: 'btn'}
];

const projects = [
    {
        id: 0,
        name: "FSAE-E Accumulator MK I",
        group: "MAC Formula Electric",
        type: "modelling",
        link: "/accumulator-MK1",
        title: "Battery Design",
        thumbnail: batterydesignThumbnail},
    {
        id: 1,
        name: "Wiring Harness",
        group: "MAC Formula Electric",
        type: "modelling",
        link: "/wiring-harness",
        title: "Wiring Harness Model and Routing",
        thumbnail: wireharnessThumbnail},
    {    
        id: 2,
        name: "Battery Cell Board Tester",
        group: "MAC Formula Electric",
        type: "modelling",
        link: "/cell-board-tester",
        title: "PCB Development",
        thumbnail: bmstestingboardThumbnail},
    {
        id: 3,
        name: "Atmospheric Water Generator",
        group: "Conestoga College",
        type: "capstone",
        link: "/atmospheric-water-generator",
        title: "Atmospheric Water Generator",
        thumbnail: awgprojectThumbnail},
    {
        id: 4,
        name: "Capstone Battery Design",
        group: "McMaster University",
        type: "modelling",
        link: "/capstone-battery",
        title: "Battery Design",
        thumbnail: capstoneThumbnail},
];


export class Projects extends Component {
    constructor(props){
        super(props)

        this.state = {
            filteredProjects: projects,
        }
    }

    filterProjects(group) {
        // Filter for 'Conestoga College' projects
        if (group === 'Conestoga College') {
            let temp = [];
            for (let p of projects) {
              if (p.group === 'Conestoga College') {
                temp.push(p);
              }
            }
            this.setState({
              filteredProjects: temp
            });
        }
        // Filter for 'MAC Formula Electric' projects
        else if (group === 'MAC Formula Electric') {
            let temp = [];
            for (let p of projects) {
              if (p.group === 'MAC Formula Electric') {
                temp.push(p);
              }
            }
            this.setState({
              filteredProjects: temp
            });
        }
        // Filter for 'McMaster University' projects
        else if (group === 'McMaster University') {
            let temp = [];
            for (let p of projects) {
              if (p.group === 'McMaster University') {
                temp.push(p);
              }
            }
            this.setState({
              filteredProjects: temp
            });
        }
    }

    render() {

        return (
                <div>
                    <div className="project-name-container">
                        <h1 className="title-name">Projects</h1>
                    </div>
                    <div className="my-btn-container">

                        {/* Display 'Show All' button */}
                        <button
                            className="btn" 
                            onClick={() => {
                            this.setState({
                                filteredProjects: projects
                            });
                            }}>Show All</button>

                        {/* Display other filter buttons */}
                        {buttons.map(item => (
                            <button
                                variant="outline-primary"
                                key={item.id}
                                className={item.btnClass}
                                type="button"
                                onClick={() => {
                                this.filterProjects(item.label);
                                }}>
                                {item.label}
                            </button>))}
                            
                    </div>
                    <div>
                        {this.state.filteredProjects.length !== 0 ? (
                            <div className="projects-container">
                                {this.state.filteredProjects.map(project => (
                                    <div className="projects-project-link-container">
                                        <ProjectLink
                                        project={project}
                                        />
                                    </div>))}
                            </div>
                        ) : (
                            <div className="projects-container">
                                <p className="intro-paragraph">No projects to display!</p>
                            </div>  
                        )}
                    </div>
                </div>
        )
    }
}

export default Projects