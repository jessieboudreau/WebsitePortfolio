import React, { Component } from 'react';
import ProjectLink from './ProjectLink';
import { makeStyles, createMuiTheme, ThemeProvider, } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FilterListIcon from '@material-ui/icons/FilterList';
import { red } from '@material-ui/core/colors';
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

const getGroup = [
        {
            name: 'All Teams', 
        },
        {
            name: 'Conestoga College', 
        },
        {
            name: 'MAC Formula Electric', 
        },
        {
            name: 'McMaster University', 
        },
    ]

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    grid: {
        margin: theme.spacing(2),
    }
    }));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ed4856',
          },
    },
    });

export class Projects extends Component {
    constructor(props){
        super(props)

        this.state = {
            filteredProjects: projects,
            data: getGroup,
            keyStroke: 0,
            filterGroupKey: 0,
            filterNameKey: 0,
            groupSelected: 'All Teams',
            nameSelected: 'All Names',
        }
    }

    renderOptions() {
        return this.state.data.map((dt, i) => {
            return (
                    <MenuItem
                        label="Select a group"
                        value={dt.name}
                        key={i} 
                        name={dt.name}>
                            {dt.name}
                    </MenuItem>
            );
        });
    }

    setKeyStroke = event => {
        this.setState({
            keyStroke: event.keyCode,
        });
    }

    handleGroupChange = event => {
        this.setState({ 
            groupSelected: event.target.textContent, 
            name: event.target.name,
            // nameSelected: 'All Names',
            filterNameKey: this.state.filterNameKey + 1,
        }, this.filterProjectsByGroup(event.target.textContent));
    };

    handleNameChange = event => {
        this.setState({ 
            nameSelected: event.target.textContent, 
            name: event.target.name,
        }, this.filterProjectsByName(event.target.textContent));
    };

    handleReset() {
        this.setState({
            keyStroke: 0,
            groupSelected: "All Teams", 
            nameSelected: "All Names", 
            filteredProjects: projects,
            filterGroupKey: this.state.filterGroupKey + 1,
            filterNameKey: this.state.filterNameKey + 1,
        },
        this.forceUpdate());
    }

    handleGroupOnKeyPress = e => {
        if (e.keyCode === 13) {
            this.filterProjectsByGroup(e.target.value);
            this.setState({
            groupSelected: e.target.value,
            keyStroke: 0,
        },
            this.forceUpdate());
        }
    }

    handleNameOnKeyPress = e => {
        if (e.keyCode === 13) {
            this.filterProjectsByName(e.target.value);
            this.setState({
            nameSelected: e.target.value,
            keyStroke: 0,
        },
            this.forceUpdate());
        }
    }

    filterProjectsByName(filter) {

        // Filter for 'All' projects
        if ((filter === 'All Names') || (filter === '' && this.state.keyStroke === 13)) {
            this.setState({
                filteredProjects: projects,
                groupSelected: "All Teams", 
                nameSelected: "All Names", 
                filterGroupKey: this.state.filterGroupKey + 1,
            },
            this.forceUpdate())
        }
        else {
            let temp = [];
            for (let p of projects) {
                if (p.name === filter) {
                    temp.push(p);
                };
                this.setState({
                    nameSelected: filter,
                    filteredProjects: temp,
                },
                this.forceUpdate());
            }
        }
    }

    filterProjectsByGroup(filter) {

        // Filter for 'All' projects
        if (filter === 'All Teams') {
            this.setState({
                filteredProjects: projects,
                groupSelected: "All Teams", 
                nameSelected: "All Names",
                filterNameKey: this.state.filterNameKey + 1,
            },
            this.forceUpdate())
        }
        // Filter for 'Conestoga College' projects
        else if (filter === 'Conestoga College') {
            let temp = [];
            for (let p of projects) {
              if (p.group === 'Conestoga College') {
                temp.push(p);
              }
            }
            this.setState({
              filteredProjects: temp,
              filterNameKey: this.state.filterNameKey + 1,
            },
            this.forceUpdate());
        }
        // Filter for 'MAC Formula Electric' projects
        else if (filter === 'MAC Formula Electric') {
            let temp = [];
            for (let p of projects) {
              if (p.group === 'MAC Formula Electric') {
                temp.push(p);
              }
            }
            this.setState({
              filteredProjects: temp,
              filterNameKey: this.state.filterNameKey + 1,
            },
            this.forceUpdate());
        }
        // Filter for 'McMaster University' projects
        else if (filter === 'McMaster University') {
            let temp = [];
            for (let p of projects) {
              if (p.group === 'McMaster University') {
                temp.push(p);
              }
            }
            this.setState({
              filteredProjects: temp,
              filterNameKey: this.state.filterNameKey + 1,
            },
            this.forceUpdate());
        }
    }


    render() {

        return (
            <div>
                <ThemeProvider theme={theme}>
                    <div className="selection-container">
                        {/* Filter dropdown menu */}
                        <span className="autocomplete">
                            <FormControl variant="outlined" className={useStyles.formControl}>
                                <Autocomplete
                                    autoComplete={true}
                                    key={this.state.filterGroupKey}
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    onChange={(event) => this.handleGroupChange(event)}
                                    options={this.state.data}
                                    disableClearable={true}
                                    noOptionsText="No teams..."
                                    onKeyDown={(event) => this.handleGroupOnKeyPress(event)}
                                    getOptionLabel={(option) => option.name}
                                    searchText={this.state.groupSelected}
                                    style={{ maxWidth: 300, width: '70vw', marginTop: 10, marginBottom: 10, marginRight: 10, }}
                                    renderInput={(params) => 
                                        <TextField 
                                            {...params}
                                            id="mui-theme-provider-outlined-input"
                                            searchText={this.state.groupSelected}
                                            icon={<FilterListIcon />} 
                                            label="Filter by team..." 
                                            variant="outlined" />}
                                />
                            </FormControl>
                        </span>

                        <span className="autocomplete">
                                <FormControl className={useStyles.formControl}>
                                    <Autocomplete
                                        autoComplete={true}
                                        key={this.state.filterNameKey}
                                        id="combo-box-demo"
                                        onChange={(event) => this.handleNameChange(event)}
                                        options={this.state.filteredProjects}
                                        getOptionLabel={(option) => option.name}
                                        disableClearable={true}
                                        searchText={this.state.nameSelected}
                                        noOptionsText="No projects..."
                                        onKeyDown={(event) => this.handleNameOnKeyPress(event)}
                                        // autoSelect
                                        style={{ maxWidth: 300, width: '70vw', marginTop: 10, marginBottom: 10, marginRight: 10, color: "secondary" }}
                                        renderInput={(params) => 
                                            <TextField 
                                                {...params}
                                                id="mui-theme-provider-outlined-input"
                                                searchText={this.state.nameSelected} 
                                                label="Filter by name..."
                                                variant="outlined" />}
                                        />
                                </FormControl>
                            </span>

                        <span className="autocomplete">
                            <Button 
                                onClick={() => {this.handleReset()}}
                                style={{ height: 56, marginTop: 10, marginBottom: 10, marginRight: 10  }} 
                                size="large" 
                                variant="outlined">
                                    Reset
                            </Button>
                        </span>
                    </div>
                </ThemeProvider>
                
                <div className="project-section">

                    {/* Display projects */}
                    <div>
                        {this.state.filteredProjects.length !== 0 
                        ?
                            <div className="projects-container">
                                {this.state.filteredProjects.map(project => (
                                    <div className="projects-project-link-container">
                                        <ProjectLink
                                        project={project}
                                        />
                                    </div>))}
                            </div>
                         : 
                            <div className="projects-container">
                                <p className="intro-paragraph">No projects to display!</p>
                            </div>  
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects