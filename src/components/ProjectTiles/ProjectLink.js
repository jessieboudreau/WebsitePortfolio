import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './ProjectTiles.css'

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: 30,
      flexGrow: 1,
    },
    grid: {
        margin: theme.spacing(2),
    },
  }));

export class ProjectLink extends Component {

    render() {

        return (this.props.project.type === "website"?
            <a href={this.props.project.link} className="project-link-link" target="_blank" rel="noopener noreferrer" >
                <Grid 
                    item
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={useStyles.grid}
                    >
                    <div className="project-link-container">
                        <img className="project-thumbnail" alt="" src={this.props.project.thumbnail}/>
                        <h1 className="project-name">{this.props.project.name}</h1>
                        <h1 className="project-group">{this.props.project.group}</h1>              
                    </div>
                </Grid>
            </a>
        :
            <Link className="project-link-link" to={this.props.project.link}>
                <Grid 
                    item
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={useStyles.grid}
                    >  
                    <div className="project-link-container">
                        <img className="project-thumbnail" alt="" src={this.props.project.thumbnail} onLoad={this.props.projectsLoaded}/>
                        <div>
                            <h1 className="project-name">{this.props.project.name}</h1>
                            <h1 className="project-group">{this.props.project.group}</h1> 
                        </div>            
                    </div>
                </Grid>
            </Link>
            
        )
    }
}

export default ProjectLink