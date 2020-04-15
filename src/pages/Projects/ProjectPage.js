import React, { Component } from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";
import { Link } from 'react-router-dom';
import ProfileBox from './../../components/ProfileBox/ProfileBox';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Button from '@material-ui/core/Button';
import "react-image-gallery/styles/css/image-gallery.css";
import './ProjectPage.css';

export class ProjectPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            showcase:this.props.images[0],
            images:this.props.images,
            intervalId: 0,
            loaded:true,
            galleryOpen:false,
            galleryBtn:"Open",
            loadingElement:<LoadingSpinner/>,
        }}
    
    updateShowcase = (newImage) => {
        this.setState({showcase:newImage})
    }

    toggleGallery = () => {
        if (this.state.galleryOpen == true) {
            this.setState({
                galleryOpen: false,
                galleryBtn: "Open",
            });
        }
        else {
            this.setState({
                galleryOpen: true,
                galleryBtn: "Close",
            })}
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

                <div>
                    <div className="project-header-container">
                        <h1 className="project-header">
                            {this.props.title}
                        </h1>
                        <div className="button" id="showcase">
                            <Button 
                                onClick={() => {this.toggleGallery()}}
                                href="#showcase"
                                style={{ height: 56, marginTop: 10, marginBottom: 10, marginRight: 10, paddingTop: 10  }} 
                                size="large" 
                                variant="outlined">
                                    {this.state.galleryBtn} Image Gallery
                            </Button>
                        </div>
                    </div>

                    {this.state.galleryOpen
                        ?   <div>
                                <div className="showcase-image-container">
                                    <img src={this.state.showcase.src} className="showcase-image"/>
                                    <p className="showcase-description">{this.state.showcase.title}</p>
                                </div>
                                <div className="showcase-image-selector-container">
                                    {this.state.images.map(img => (
                                        <div className="showcase-image-selector-image-container" onClick={this.updateShowcase.bind(this,img)}>
                                            <a href="#showcase">
                                                <img src={img.src} className="showcase-image-selector-image"/>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        :   <div></div>
                    }       
                </div>



                <div>
                    {this.props.contents}              
                </div>
            </div>
        )
    }
}

export default ProjectPage
