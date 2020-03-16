import React, { Component } from 'react'
import original from './../../img/battery-design/original.png';
import cellsInstalled from './../../img/battery-design/cells-installed.jpg';
import chamber from './../../img/battery-design/chamber.png';
import fixture from './../../img/battery-design/inside-chamber.png';
import assembled from './../../img/battery-design/assembled.jpg';
import voltVcap from './../../img/battery-design/voltage-v-cap.png';
import ProjectPage from './ProjectPage';

export class BatteryMK1 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {

        return (

            <ProjectPage
            title="FSAE-E Accumulator MK 1"
            images={[
                {image: original,
                    description:"Model of the 2018 vehicle battery, also referred to as the 'Accumulator'"},
                {image: assembled,
                    description:"Complete assmembly"},
                {image: cellsInstalled,
                    description:"Cells instlled in the enclosure"},
                {image: chamber,
                    description:"Thermal chamber and cycler used for testing and characterization"},
                {image: fixture,
                    description:"Prismatic pouch cell inside the test fixture in the thermal chamber"},
                ]}

            contents={[
                <div>
                    <h1 className="project-header">Overview</h1>
                    <p className="project-description">
                        Our Accumulator consists of 138 indiviual lithium-ion pouch cells, with a total voltage of 600V.  Given the risk associated with handling this package, we required proper documentation for the assembly procedure. I created this procedure using SolidWorks Composer, creating snapshots and a full animation for our plan for assembly.  Once this was completed and a select few members received high-voltage certifications, we were able to source the proper resources and supervision for the assembly of our battery, a major milestone in the completion of our vehicle.
                    </p>
                    <h1 className="project-header">Cell Testing</h1>
                    <p className="project-description">
                    A battery cell from the current accumulator pack was thoroughly tested at the MARC facility in order to provide baseline metrics of cell performance. Baseline cell performance metrics of the existing cells will allow us essential to validating performance improvements between the new battery cells and the existing cells.<br/><br/>
                    </p>
                    <img src={voltVcap} className="showcase-image"></img>
                    <h1 className="project-header">Cooling</h1>
                    <p className="project-description">
                    Three options for accumulator cooling were investigated, including forced air cooling, composite phase change materials, and liquid cooling.<br/> <br/> 
                    After careful consideration of the three options, air cooling was chosen to maintain the thermal performance of the accumulator. The combination of low-weight, cost, and simplicity outweighed any potential drawbacks in performance <br/><br/>  
                    Below is a video of the fan controls being tested!<br/> <br/> 
                    </p>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://youtube.com/embed/TYOCjgeFkfI"></iframe>
                    </div>
                    {/* <div>
                        <h1 className="project-subheader">Table 1: Test cases</h1>
                        <table class="tftable" border="1">
                        <tr><th>Driving Schedule</th><th>Test Case</th><th>Expected Result</th><th>Test Area</th><th>Test Case</th><th>Expected Result</th><th>Expected Result</th></tr>
                        <tr><td>Power</td><td>Press push-button to apply voltage to board</td><td>LED lights up indicating power</td></tr>
                        <tr><td>Bus Test</td><td>Press push button to send short pulse of current to C+ pad</td><td>Board is able to stop current out of C-. If it can’t, there will be a “Long Pulse” error of 3 blinks</td></tr>
                        <tr><td>Temperature Reading Test</td><td>Uses on-board thermistor to test temperature</td><td>Very Low = “0”, 4 blinks <br></br>Low = ”Reads hot”, 5 blinks <br></br>High = ”Reads cold”, 6 blinks <br></br>Very High = ”FFh”, 7 blinks</td></tr>
                        <tr><td>Voltage Reading Test</td><td>Measures voltage, which will be the 3.0V supply</td><td>Very Low = ”00h”, 8 blinks <br></br>Low = ”Ref Reading Too Low”, 9 blinks <br></br>High = ”Ref Reading too High”,10 blinks <br></br>Very High = ”FFh”, 11 blinks</td></tr>
                        <tr><td>Load Test</td><td>Turns on balancing load, dragging supply voltage down</td><td>Turns on load and waits 10ms. If it hasn’t changed, “No Load” error, 12 blinks</td></tr>
                        <tr><td>Pass Test</td><td>If no errors, board passes the test</td><td>“Pass”, 1 blink</td></tr>
                        </table>
                    </div> */}
                </div>
            ]}
            />
        )
    }
}

export default BatteryMK1
