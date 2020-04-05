import React, { Component } from 'react';
import ProjectLink from './ProjectLink';
import Resume from './../../docs/jessie-boudreau-resume.pdf'
import ExpansionList from './../../components/ExpansionList/ExpansionList'
import './../../components/ProjectTiles/Projects.css';


const buttons = [
    {
        id: 0,
        label: 'Career',
        btnClass: 'btn'},
    {
        id: 1,
        label: 'Reports',
        btnClass: 'btn'},
    {
        id: 2,
        label: 'Recommendations',
        btnClass: 'btn'}
];

const files = [
    {
        id: 0,
        name: "Resume",
        type: "Career",
        format: "PDF",
        date: "March 23rd, 2020",
        link: "",
        file: Resume},
    {
        id: 1,
        name: "Letter of Recommendation - Phil Kollmeyer",
        type: "Recommendations",
        date: "March 23rd, 2020",
        format: "PDF",
        link: "",
        file: ""},
];


export class Documents extends Component {
    constructor(props){
        super(props)

        this.state = {
            filteredFiles: files,
        }
    }

    filterFiles(group) {
        // Filter for 'Career' files
        if (group === 'Career') {
            let temp = [];
            for (let f of files) {
              if (p.group === 'Career') {
                temp.push(p);
              }
            }
            this.setState({
              filteredFiles: temp
            });
        }
        // Filter for 'Reports' files
        else if (group === 'Reports') {
            let temp = [];
            for (let f of files) {
              if (p.group === 'Reports') {
                temp.push(p);
              }
            }
            this.setState({
              filteredFiles: temp
            });
        }
        // Filter for 'Recommendations' files
        else if (type === 'Recommendations') {
            let temp = [];
            for (let f of files) {
              if (p.type === 'Recommendations') {
                temp.push(p);
              }
            }
            this.setState({
              filteredFiles: temp
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
                                filteredFiles: files
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
                                this.filterFiles(item.label);
                                }}>
                                {item.label}
                            </button>))}
                            
                    </div>
                    <div>
                        {this.state.filteredProjects.length !== 0 ? (
                            <div className="projects-container">
                                {this.state.filteredFiles.map(Files => (
                                    <div className="projects-project-link-container">
                                        <ExpansionList
                                        files={file}
                                        />
                                    </div>))}
                            </div>
                        ) : (
                            <div className="projects-container">
                                <p className="intro-paragraph">No files to display!</p>
                            </div>  
                        )}
                    </div>
                </div>
        )
    }
}

export default Documents