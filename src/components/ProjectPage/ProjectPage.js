import React, { Component } from 'react'
import ProfileBox from '../ProfileBox/ProfileBox';



import './ProjectPage.css';
import Projects from './../../components/Projects/Projects.js'

export class ProjectPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            showcase:this.props.images[0],
            images:this.props.images

        }}
    

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    updateShowcase = (newImage) =>{
        this.setState({showcase:newImage})
    }

    render() {
        return (
            <div>
                <ProfileBox />
                <div className="project-header-container">
                    <h1 className="project-header">
                        {this.props.title}
                    </h1>
                </div>
                <div className="showcase-container">
                    <img src={this.state.showcase.image} className="showcase-image"/>
                    <p className="showcase-description">{this.state.showcase.description}</p>
                </div>
                <div className="showcase-image-selector-container">
                    {this.state.images.map(img => (
                        <div className="showcase-image-selector-image-container" onClick={this.updateShowcase.bind(this,img)}>
                            <img src={img.image} className="showcase-image-selector-image"/>
                        </div>
                    ))}
                </div>
                <div className="project-description-container">
                    <h1 className="project-header">Overview</h1>
                    <p className="project-description">
                        {this.props.description}
                    </p> 

                    {/* Additonal project-specific content */}
                    {this.props.hasTable ?
                    this.props.table
                    : <div></div>
                }               
                </div>
            </div>
        )
    }
}

export default ProjectPage
