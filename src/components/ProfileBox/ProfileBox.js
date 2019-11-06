import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './ProfileBox.css';
import resume from './../../docs/jessie-boudreau-resume.pdf'

import homelogo from './../../img/home-icon-silhouette.png'

export class ProfileBox extends Component {
    render() {
        return (
            <div className="profile-box-container">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className="profile-box-name-container">
                    <img src='https://media.licdn.com/dms/image/C5603AQEatH7-ceCsiA/profile-displayphoto-shrink_200_200/0?e=1578528000&v=beta&t=teXEdJhtYi5buC9CCJr-jSghyBB5G117dXAuxNBr73s' alt="Avatar" class="avatar"></img>
                    <h1 className="profile-box-name">Jessie Boudreau</h1>
                    <a className="linkedin-link-container" href="https://www.linkedin.com/in/jessie-boudreau-46203ba5/" target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-linkedin" style={{fontSize:"45px",color:"rgb(37, 124, 195)"}}></i>
                    </a>
                    <a className="github-link-container" href="https://github.com/jessieboudreau" target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-github" style={{fontSize:"45px",color:"rgb(49, 51, 53)"}}></i>
                    </a>
                    <div className="resume-button-wrapper">
                        <a className="resume-button" target="_blank" rel="noopener noreferrer" href={resume}>Resume</a>
                    </div>
                </div>
                <div className="profile-box-school-container">
                    <h1 className="profile-box-school">McMaster University | Power & Energy Engineering 2020</h1>
                </div>
                <div className="home-link-container">
                <Link to="/">
                    <img alt="Home icon" className={`home-link ${this.props.home}`} src={homelogo}></img>
                </Link>
                </div>
            </div>
        )
    }
}

export default ProfileBox
