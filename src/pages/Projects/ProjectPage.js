import React, { Component } from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";
import { Link } from 'react-router-dom';
import ProfileBox from './../../components/ProfileBox/ProfileBox';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import './ProjectPage.css';

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
                        <MDBBreadcrumbItem active>
                            {this.props.group}
                        </MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active
                            >{this.props.title}
                        </MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                </MDBContainer>

                <div className="showcase-container">
                    <div className="project-header-container">
                        <h1 className="project-header" id="showcase">
                            {this.props.title}
                        </h1>
                    </div>
                    <div className="showcase-image-container">
                        <img src={this.state.showcase.image} className="showcase-image"/>
                        <p className="showcase-description">{this.state.showcase.description}</p>
                    </div>
                    <div className="showcase-image-selector-container">
                        {this.state.images.map(img => (
                            <div className="showcase-image-selector-image-container" onClick={this.updateShowcase.bind(this,img)}>
                                <a href="#showcase">
                                    <img src={img.image} className="showcase-image-selector-image"/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    {this.props.contents}              
                </div>
            </div>
        )
    }
}

export default ProjectPage
