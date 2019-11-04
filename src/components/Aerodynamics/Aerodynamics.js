import React, { Component } from 'react'
import ProfileBox from '../ProfileBox/ProfileBox';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import topdown from './../../img/aerodynamics/top-down-streamlines.png'

import './Aerodynamics.css';

export class Aerodynamics extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <div>
                <ProfileBox />

                <div className="aerodynamic-showcase">
                    <img src={topdown} className="aerodynamic-image"></img>
                </div>

                <div className="intro-text-title-container">
                    <h1 className="intro-text-title">
                        Aerodynamic Development
                    </h1>
                </div>
                <div className="intro-text-para">
                    <p className="intro-text">

                    </p>
                </div>



            </div>
        )
    }
}

export default Aerodynamics
