import React, { Component } from 'react';
import ProjectLink from './ProjectLink';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Projects.css';

// Project thumbnails
import batterydesignThumbnail from './../../img/thumbnail/batterydesign-thumbnail.png';
import bmstestingboardThumbnail from './../../img/thumbnail/cellboardtester-thumbnail.png';
import wireharnessThumbnail from './../../img/thumbnail/wiring-thumbnail.png';
import awgprojectThumbnail from './../../img/thumbnail/watergenerator-thumbnail.jpg';
import capstoneThumbnail from './../../img/thumbnail/capstone-thumbnail.png';
import inverterThumbnail from './../../img/thumbnail/inverters-thumbnail.png';
import cyclerThumbnail from './../../img/thumbnail/cycler-thumbnail.png';
import chargerThumbnail from './../../img/thumbnail/charger-thumbnail.png';
import cartThumbnail from './../../img/thumbnail/cart-thumbnail.JPG';

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
        btnClass: 'btn'},
];

export const projects = [
    {
        id: 0,
        name: "Electric Vehicle Battery",
        group: "MAC Formula Electric",
        type: "modelling",
        link: "/projects/mac-formula-electric/ev-battery/",
        title: "Battery Design",
        thumbnail: batterydesignThumbnail
    },
    {   
        id: 1,
        name: "Battery Cell Board Tester",
        group: "MAC Formula Electric",
        type: "modelling",
        link: "/projects/mac-formula-electric/cell-board-tester/",
        title: "PCB Development",
        thumbnail: bmstestingboardThumbnail
    },
    {
        id: 2,
        name: "Atmospheric Water Generator",
        group: "Conestoga College",
        type: "capstone",
        link: "/projects/conestoga/atmospheric-water-generator/",
        title: "Atmospheric Water Generator",
        thumbnail: awgprojectThumbnail
    },
    // {
    //     id: 3,
    //     name: "Capstone Battery Design",
    //     group: "McMaster University",
    //     type: "modelling",
    //     link: "/projects/mcmaster/capstone/",
    //     title: "Battery Design",
    //     thumbnail: capstoneThumbnail
    // },
    // {    
    //     id: 4,
    //     name: "Inverter & MCU Enclosure",
    //     group: "MAC Formula Electric",
    //     type: "modelling",
    //     link: "/projects/mac-formula-electric/inverter-enclosure/",
    //     title: "Battery Design",
    //     thumbnail: inverterThumbnail
    // },
    {
        id: 5,
        name: "Charging Cart",
        group: "MAC Formula Electric",
        type: "modelling",
        link: "/projects/mac-formula-electric/charging-cart/",
        title: "Battery Design",
        thumbnail: cartThumbnail
    },
    // {    
    //     id: 6,
    //     name: "Electric Vehicle Charger",
    //     group: "MAC Formula Electric",
    //     type: "modelling",
    //     link: "/projects/mac-formula-electric/charger-enclosure/",
    //     title: "Battery Design",
    //     thumbnail: chargerThumbnail
    // },
    {    
        id: 7,
        name: "Battery Cycler",
        group: "McMaster University",
        type: "modelling",
        link: "/projects/mcmaster/battery-cycler/",
        title: "Battery Design",
        thumbnail: cyclerThumbnail
    },
];

export class Projects extends Component {
    constructor(props){
        super(props)

        this.state = {
            filteredProjects: projects,
            formFill: 'Show All',
        }
    }

    useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 240,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
    }));

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
                <div className="project-section">
                    {/* <div className="project-name-container">
                        <h1 className="title-name">Projects</h1>
                    </div> */}
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
                        {/* <FormControl variant="outlined" className={this.useStyles.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Group</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                onChange={this.handleChange}
                                label=""
                                autoWidth='true'
                            >
                            <a onclick={() => {
                                this.setState({
                                    filteredProjects: projects
                                })}}>
                                <MenuItem>Show All</MenuItem>
                            </a>
                            {buttons.map(item => (
                                <a onclick={() => {
                                    this.setState({
                                        filteredProjects: projects,
                                        formFill: this.label,
                                    })}}
                                >
                                <MenuItem>
                                    {item.label}
                                </MenuItem>
                                </a>
                            ))} 
                            </Select>
                            <FormHelperText>Filter</FormHelperText>
                        </FormControl> */}
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