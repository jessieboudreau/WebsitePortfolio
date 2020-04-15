import React, { Component } from 'react'
import Iso from './../../img/BatteryCycler/iso.png';
import Assembled from './../../img/BatteryCycler/assembled.jpg';
import Schematic from './../../docs/BatteryCycler/electrical-schematic.pdf';
import ProjectPage from './ProjectPage';

export class BatteryMK1 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (

            <ProjectPage
            title="Battery Cycler"
            group="McMaster University"
            images={[
                {
                    src: Iso,
                    title: "Iso rendering (internal view)"
                },
                {
                    src: Assembled,
                    title: "Partially assembled"
                },
                ]}

            contents={[
                <div width="100%">
                    <div class="section-nav">
                        <ol>
                            <li className="contents-list"><a href="#overview">Overview</a></li>
                            <li className="contents-list"><a href="#schematic">Electrical Schematic</a></li>
                        </ol>
                    </div>
                    <div className="project-description-container">
                        <h1 className="project-header" id="overview">Overview</h1>
                        <p className="project-description">
                            The battery cycler is designed to cycle test battery cells with upto 150 amps. The controller is a 
                            National Instruments CompacDAQ with four card slots. The cards are used for analogue & digital 
                            sensing, voltage sense, and serial communication. The software was developed using LabView by 
                            <a href="https://www.linkedin.com/in/phil-kollmeyer-6a313711/"> Phil Kollmeyer</a>. This cycler 
                            is designed for cycle testing, hybrid pulse power characterization (HPPC), and impedance 
                            spectroscopy.
                        </p>
                        <h1 className="project-header" id="schematic">Electrical Schematic</h1>
                        <div class="embed-responsive embed-responsive-4by3">
                            <object data={Schematic} type="application/pdf">
                                <iframe src="https://docs.google.com/viewer?url=your_url_to_pdf&embedded=true"></iframe>
                            </object>
                        </div>
                        <br/><br/>
                    </div>
                </div>
            ]}
            />
        )
    }
}

export default BatteryMK1
