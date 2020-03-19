import React, { Component } from 'react'
import ProfileBox from '../ProfileBox/ProfileBox';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";
import { Link } from 'react-router-dom';
import LoadingSpinner from './../../components/loadingspinner/LoadingSpinner';
import './ProjectPage.css';
import Projects from './../../components/Projects/Projects.js'


export class ProjectPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            showcase:this.props.images[0],
            images:this.props.images,
            intervalId: 0,
            loaded:true,
            loadingElement:<LoadingSpinner/>
        }}
    

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    updateShowcase = (newImage) => {
        this.setState({showcase:newImage})
    }



    render() {
        return (
            <div>
                <ProfileBox />
                <MDBContainer>
                    <MDBBreadcrumb>
                        <MDBBreadcrumbItem>
                            <Link to="/">
                                Home
                            </Link>
                        </MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active>
                            Projects
                        </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active>{this.props.title}</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                </MDBContainer>

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
                    {this.props.contents}              
                </div>
            </div>
        )
    }
}

export default ProjectPage
