import React, { Component } from 'react'
import avatar from './../../img/jessie.jpg'
import 'react-vertical-timeline-component/style.min.css';
import './AboutMe.css';

export class ProjectView extends Component {
    render() {
        return (
            <div className="intro-paragraph-container">
                <h1 className="title-name">About Me</h1>
                <img src={avatar} alt="A portrait of Jessie Boudreau" class="curve"></img>
                <p className="intro-paragraph">
                As a student at McMaster, I have been very involved with extra-curricular teams and they 
                drive me to extend my in-class learning. The Formula SAE team is a group of 90 engineering students 
                who design, test and build a quarter-scale, fully-electric, open-wheel racecar. Since I joined the team
                September 2017, I have had the opportunity to work on a variety of projects that both endorsed and 
                challenged my in-class learning. Here you will find many of the projects I have worked on in class and on 
                this team.
                </p>
            </div>
        )
    }
}

export default ProjectView
