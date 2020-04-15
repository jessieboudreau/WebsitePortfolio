import React, { Component } from 'react'


import showcase from './../../img/AtmosphericWaterGenerator/showcase.jpg';
import rightView from './../../img/AtmosphericWaterGenerator/right-side-view.jpg';
import relayTesting from './../../img/AtmosphericWaterGenerator/relay-testing.jpg';
import rearView from './../../img/AtmosphericWaterGenerator/rear-view.jpg';
import leftView from './../../img/AtmosphericWaterGenerator/left-side-view.jpg';
import ledTesting from './../../img/AtmosphericWaterGenerator/led-testing.jpg';
import frontView from './../../img/AtmosphericWaterGenerator/front-view.jpg';
import drawings from './../../img/AtmosphericWaterGenerator/drawings.png';
import controlBox from './../../img/AtmosphericWaterGenerator/control-box.jpg';
import controlThread from './../../img/AtmosphericWaterGenerator/control-thread-process-flow.png';
import dataThread from './../../img/AtmosphericWaterGenerator/data-logging-thread-process-flow.png';
import generalThread from './../../img/AtmosphericWaterGenerator/general-process-flow.png';
import powerCircuits from './../../img/AtmosphericWaterGenerator/power-circuits.png';
import rpiInputs from './../../img/AtmosphericWaterGenerator/rpi-inputs.png';
import rpiOutputs from './../../img/AtmosphericWaterGenerator/rpi-outputs.png';

import ProjectPage from './ProjectPage';

export class AWG extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            
            <ProjectPage
            title="Atmospheric Water Generator"
            group="Conestoga College"
            images={[
                {
                    src: frontView,
                    title: "Front view with access panel"
                },
                {
                    src: rightView,
                    title: "Right-side view"
                },
                {
                    src: rearView,
                    title: "Rear view"
                },
                {
                    src: leftView,
                    title: "Left view showing air inlet"
                },
                {
                    src: showcase,
                    title: "Showcase presentation"
                },
            ]}
            contents={[
                <div>
                    <div class="section-nav">
                        <ol>
                            <li className="contents-list"><a href="#overview">Overview</a>
                                <ul>
                                    <li className="contents-list"><a href="#additional-links">Additional Links</a></li>
                                </ul>
                            </li>
                            <li className="contents-list"><a href="#hvac">HVAC</a></li>
                            <li className="contents-list"><a href="#plumbing">Plumbing</a></li>
                            <li className="contents-list"><a href="#mechanical">Mechanical</a></li>
                            <li className="contents-list"><a href="#power-circuits">Power Circuits</a>
                                <ul>
                                    <li className="contents-list"><a href="#figure-1">Figure 1: Power circuits schematic</a></li>
                                </ul>
                            </li>
                            <li className="contents-list"><a href="#control-circuits">Control Circuits</a>
                                <ul>
                                    <li className="contents-list"><a href="#figure-2">Figure 2: Raspberry Pi outputs schematic</a></li>
                                    <li className="contents-list"><a href="#figure-3">Figure 3: Raspberry Pi inputs schematic</a></li>
                                </ul>
                            </li>
                            <li className="contents-list"><a href="#concurrent-programming">Concurrent Programming</a>
                                <ul>
                                    <li className="contents-list"><a href="#figure-4">Figure 4: Process overview block diagram</a></li>
                                    <li className="contents-list"><a href="#figure-5">Figure 5: Control thread block diagram</a></li>
                                    <li className="contents-list"><a href="#figure-6">Figure 6: Data thread block diagram</a></li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                    <div className="project-description-container">
                        <h1 className="project-header" id="overview">Overview</h1>
                        <p className="project-description">
                            The Atmospheric Water Generator (AWG) extract water from the air by condensing it over some refrigerant cooled coils. The extracted water is first stored in a "gray-water" tank before filtration. Once the gray-water tank has sufficient volume, it is pumped out and filtered through an ultra-violet reaction chamber. Finally, the water is stored in a "fresh-water" tank awaiting consumption. The technologies the AWG employs may be divided into six categories. The six categories are as follows:
                        </p>
                        <div>
                            <div className="pill"><span class="fa fa-trophy"></span> Mastercraft Award Winner: Spring 2017</div>
                            <div className="pill"><span class="fa fa-star"></span> ESET Program Top Project</div>
                            {/* <div className="pill"><span className="check" class="fa fa-check"></span> Final Grade</div> */}
                        </div>
                        {/* Additional Links */}
                        <div className="project-links">
                            <h1 className="project-subheader" id="additional-links">Additonal Links:</h1>
                            <a className="link" target="_blank" rel="noopener noreferrer" href="http://blogs1.conestogac.on.ca/news/2017/05/techwork_showcases_capstone_pr.php">
                                Conestoga College News: Tech@Work showcases capstone projects
                            </a>
                        </div>
                        <h1 className="project-header" id="hvac">HVAC</h1>
                        <p className="project-description">
                            The water collection circuit consists of a standard vapor-compression dehumidifier, charged with R140A refrigerant, together with a blower fan and heat exchangers (condenser and evaporator). Both the compressor and fan are powered by 120VAC and have filter capacitors in parallel with their inputs.
                        </p>
                        <h1 className="project-header" id="plumbing">Plumbing</h1>
                        <p className="project-description">
                            ¼” ID vinyl tubing channels water from the dehumidifier drip-pan into two food-grade 35L collection tanks. The tubing is secured with hose clamps and plumbers’ tape where necessary. Two 12VDC pumps move water from the gray water tank to the potable water tank, and from the potable water tank to the dispenser, respectively.
                        </p>
                        <h1 className="project-header" id="mechanical">Mechanical</h1>
                        <p className="project-description">
                            The AWG chassis is constructed of 4 cm and 3 cm extruded aluminum slotted bar, chosen for its strength and suitability for bearing the weight of the compressor and blower, as well as the water tanks when full. At full capacity, the tanks alone weigh approximately 70 kg, or 154 lbs:
                            <br/>2tanks * 35 L/tank * 1kg/L = 70kg = 70kg * 2.2lbs/kg = 154lbs
                        </p>
                        <h1 className="project-header" id="power-circuits">Power Circuits</h1>
                        <p className="project-description">
                            The power circuitry of the AWG is at 120VAC. This circuit provides power for the:
                                <li>Compressor;</li>
                                <li>Blower Fan;</li>
                                <li>12VDC Power Supply;</li>
                                <li>UV Ballast; and</li>
                                <li>2x 5V DC Power Supplies</li>
                            As previously mentioned, the inclusion of an inverter on the power side is essential to the off-grid functionality of the AWG. The inverter is fed by 12VDC from the DC input and the inverted output is put in parallel with the 120VAC input, with two contactors acting as a transfer switch/interlock to prevent simultaneously supplying power from both the inverter and mains. 
                            <br/>The power supplies are supplied with a hard-wired 120VAC source, however the other components—the compressor, fan and ballast—are connected to the relay board in order to control their on/off state by way of low-voltage Raspberry Pi control signals.
                        </p>
                        <h1 className="project-subheader" id="figure-1">Figure 1: Power circuits schematic</h1>
                        <img src={powerCircuits} className="figure"></img>
                        <h1 className="project-header" id="control-circuits">Control Circuits</h1>
                        <p className="project-description">
                            The control circuitry consists of the following components:
                                <li>Compressor;</li>
                                <li>Blower Fan;</li>
                                <li>12VDC Power Supply;</li>
                                <li>UV Ballast; and</li>
                                <li>2x 5V DC Power Supplies</li>
                            The relay board and microcontrollers are safely located within the steel control box. The Raspberry Pi acts as the central controller for the entire system, receiving all sensor inputs and switching output relays on the 8-channel relay board in response. In total, 7 output channels are used in conjunction with 7 2N4401 transistors and 5 relay coils. This is depicted in the figure below:
                        </p>
                        <h1 className="project-subheader" id="figure-2">Figure 2: Raspberry Pi outputs schematic</h1>
                        <img src={rpiOutputs} className="figure"></img>
                        <p className="project-description">
                            On the input side, the Raspberry Pi receives signals on 6 GPIO (general purpose input/output) channels. This is depicted in the figure below:
                        </p>
                        <h1 className="project-subheader" id="figure-3">Figure 3: Raspberry Pi inputs schematic</h1>
                        <img src={rpiInputs} className="figure"></img>
                        <h1 className="project-header" id="concurrent-programming">Concurrent Programming</h1>
                        <p className="project-description">
                            Approximately 330 lines of Python control code run three concurrent threads on the Raspberry Pi in order to operate the AWG: a control thread, a data logging thread, and a fault handling thread. All three threads run in parallel to provide real-time responsiveness and automation. the following 3 figures depict the process flow for the overall program process flow in addition to more detailed process flow diagrams of the controls and data logging threads. In addition to the Raspberry Pi code, the Arduino Uno executes approximately 50 lines of code in order to monitor the evaporator temperature and output the result to the Raspberry Pi using a serial data link. This connection is handled by a serial module imported in the main Python program.
                        </p>
                        <h1 className="project-subheader" id="figure-4">Figure 4: Process overview block diagram</h1>
                        <img src={generalThread} className="figure"></img>
                        <h1 className="project-subheader" id="figure-5">Figure 5: Control thread block diagram</h1>
                        <img src={controlThread} className="figure"></img>
                        <h1 className="project-subheader" id="figure-6">Figure 6: Data thread block diagram</h1>
                        <img src={dataThread} className="figure"></img>
                    </div>
                </div>
            ]}
            />
        )
    }
}

export default AWG
