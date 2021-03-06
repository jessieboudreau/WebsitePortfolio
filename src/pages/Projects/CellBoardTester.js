import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import isoView from './../../img/thumbnail/cellboardtester-thumbnail.png';
import topView from './../../img/CellBoardTester/top-view.PNG';
import topLayer from './../../img/CellBoardTester/top-layer-view.PNG';
import complete from './../../img/CellBoardTester/complete.jpg'


export class pcbDev extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <ProjectPage
            title="Battery Cell Board Tester"
            group="MAC Formula Electric"
            images={[
                {
                    src: isoView,
                    alt: "",
                    title: "Isometric view render"
                },
                {
                    src: topView,
                    alt: "",
                    title: "Top view render"
                },
                {
                    src: topLayer,
                    alt: "",
                    title: "Top layer view"
                },
                {
                    src: complete,
                    alt: "",
                    title: "Complete assembled pcb with testing harness"
                },
            ]}

            contents={[
                <div>
                    <div class="section-nav">
                        <ol>
                            <li className="contents-list"><a href="#overview">Overview</a>
                                <ul>
                                    <li className="contents-list"><a href="#table-1">Table 1: Test cases</a></li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                    <div className="project-description-container">
                        <h1 className="project-header" id="overview">Overview</h1>
                        <p className="project-description">
                            The battery cell board tester is a critical component that ensures the accumulator management system (AMS) 
                            is functioning properly and reliability prior to assembly. The AMS used for the MK 1 version of the vehicle 
                            accumulator was the Elition Lithiumate Pro – a decentralized management system that utilizes AMS slave boards 
                            for each cell to measure voltage, temperature, and handle cell balancing. The cell board tester is designed 
                            to simulate a connection to a cell and generate a single LED flash if the board is in good working condition 
                            or a series of other LED functions for a number of different failure modes detailed <a href="#table-1">Table 1</a>.
                        </p>
                        <div>
                            <h1 className="project-subheader" id="table-1">Table 1: Test cases</h1>
                            <table class="tftable" border="1">
                            <tr><th>Test Area</th><th>Test Case</th><th>Expected Result</th></tr>
                            <tr><td>Power</td><td>Press push-button to apply voltage to board</td><td>LED lights up indicating power</td></tr>
                            <tr><td>Bus Test</td><td>Press push button to send short pulse of current to C+ pad</td><td>Board is able to stop current out of C-. If it can’t, there will be a “Long Pulse” error of 3 blinks</td></tr>
                            <tr><td>Temperature Reading Test</td><td>Uses on-board thermistor to test temperature</td><td>Very Low = “0”, 4 blinks <br></br>Low = ”Reads hot”, 5 blinks <br></br>High = ”Reads cold”, 6 blinks <br></br>Very High = ”FFh”, 7 blinks</td></tr>
                            <tr><td>Voltage Reading Test</td><td>Measures voltage, which will be the 3.0V supply</td><td>Very Low = ”00h”, 8 blinks <br></br>Low = ”Ref Reading Too Low”, 9 blinks <br></br>High = ”Ref Reading too High”,10 blinks <br></br>Very High = ”FFh”, 11 blinks</td></tr>
                            <tr><td>Load Test</td><td>Turns on balancing load, dragging supply voltage down</td><td>Turns on load and waits 10ms. If it hasn’t changed, “No Load” error, 12 blinks</td></tr>
                            <tr><td>Pass Test</td><td>If no errors, board passes the test</td><td>“Pass”, 1 blink</td></tr>
                            </table>
                        </div>
                    </div>
                </div>
            ]}
            />
        )
    }
}

export default pcbDev
