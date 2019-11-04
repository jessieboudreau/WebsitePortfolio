import React, { Component } from 'react'
import ProfileBox from '../ProfileBox/ProfileBox';

import wiringharness from './../../img/WiringHarness/original.png';
import wiringtopview from './../../img/WiringHarness/top-view.png';
import wiringfronview from './../../img/WiringHarness/front-view.png';



import './WiringHarness.css';

export class WiringHarness extends Component {
    constructor(props){
        super(props)
        this.state = {images:[
            wiringharness, wiringfronview, wiringtopview
        ]

        }}
    

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <ProfileBox />
                <div className="wiring-harness-showcase">
                    <img alt="Wiring harness CAD rendering" src={wiringharness} className="wiring-harness-image"/>
                </div>
                <div className="showcase-image-selector-container">
                    {this.state.images.map(img => (
                        <div className="showcase-image-selector-image-container">
                            <img alt="showcas selector" className="showcase-image-selector-image" scr={img}></img>
                            </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default WiringHarness
