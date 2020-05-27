import React, { Component } from 'react'
import original from './../../img/Accumulator/original.png';
import cellsInstalled from './../../img/Accumulator/cells-installed.jpg';
import chamber from './../../img/Accumulator/chamber.png';
import fixture from './../../img/Accumulator/inside-chamber.png';
import assembled from './../../img/Accumulator/assembled.jpg';
import voltVcap from './../../img/Accumulator/voltage-v-cap.png';
import resVsoc from './../../img/Accumulator/res-v-cap.png';
import ProjectPage from './ProjectPage';

export class BatteryMK1 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (

            <ProjectPage
            title="FSAE-E Accumulator MK 1"
            group="MAC Formula Electric"
            images={[
                {
                    src: original,
                    title: "Model of the 2018 vehicle battery, also referred to as the 'Accumulator'"
                },
                {
                    src: assembled,
                    title: "Complete assembly"
                },
                {
                    src: cellsInstalled,
                    title: "Cells installed in the enclosure"
                },
                {
                    src: chamber,
                    title: "Thermal chamber and cycler used for testing and characterization"
                },
                {
                    src: fixture,
                    title: "Prismatic pouch cell inside the test fixture in the thermal chamber"
                },
                ]}

            contents={[
                <div width="100%">
                    <div class="section-nav">
                        <ol>
                            <li className="contents-list"><a href="#overview">Overview</a></li>
                            <li className="contents-list"><a href="#cell-testing">Cell Testing</a>
                                <ul>
                                    <li className="contents-list"><a href="#figure-1">Figure 1: Voltage vs. C-Rate (25°C)</a></li>
                                    <li className="contents-list"><a href="#figure-2">Figure 2: Cell Internal Resistance vs. State of Charge (25°C)</a></li>
                                    <li className="contents-list"><a href="#table-1">Table 1: Driving schedule test results</a></li>
                                </ul>
                            </li>
                            <li className="contents-list"><a href="#cooling">Cooling</a>
                                <ul>
                                    <li className="contents-list"><a href="#video-1">Video: Accumulator Fan Testing</a></li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                    <div className="project-description-container">
                        <h1 className="project-header" id="overview">Overview</h1>
                        <p className="project-description">
                            This Accumulator consists of 138 indiviual lithium-ion pouch cells, with a nominal voltage of 497V and 
                            a max voltage of 580V. My contributions to this project include: cell packaging, busbar design, electrical
                            packaging & wiring, cell testing & characterization, and pack manufacturing & assembly.
                            <br/>
                        </p>
                        <h1 className="project-header" id="cell-testing">Cell Testing</h1>
                        <p className="project-description">
                            A battery cell from the current accumulator pack was thoroughly tested at the McMaster Automotive Resource 
                            Center (MARC) in order to provide baseline metrics of cell performance. Baseline cell performance metrics 
                            of the existing cells will allow us to validate performance improvements between the new battery 
                            cells and the existing cells.<br/><br/>
                            The charge and discharge characteristics of the current accumulator cells were obtained using a specialized 
                            battery cycler inside of a thermal chamber (to maintain a constant temperature of 25°C). The cells' 
                            charge-discharge cycles were completed at 0.05C, 0.5C, 1C, 2C, 3C and 5C.<br/>
                        </p>
                        <h1 className="project-subheader" id="figure-1">Figure 1: Voltage vs. C-Rate (25°C)</h1>
                        <img src={voltVcap} className="figure"></img>
                        <br/><br/>
                        <p className="project-description">
                            The results of the test above indicate that the effective capacity of the cell decreases as the power drawn from the cell increases. This is a result of the internal resistance of the cell, shown in Figure 2, dissipating more power as the current drawn from the cell increases.<br/>
                        </p>
                        <h1 className="project-subheader" id="figure-2">Figure 2: Cell Internal Resistance vs. State of Charge (25°C)</h1>
                        <img src={resVsoc} className="figure"></img>
                        <br/><br/>
                        <p className="project-description">
                            The data in Figure 2 shows that the resistance of the cell begins to increase at approximately 70% 
                            depth of discharge (DOD). The rate at which the resistance increases is proportional to the rate of 
                            charge. Since the rate of discharge increases with the rate of vehicle acceleration, this information 
                            tells us that more aggressive driving will result in more losses and, therefore, shorter drive-times. 
                            Table 1 shows data for various drive-cycles - with UDDS being the most conservative and US06 being the 
                            most aggressive.<br/>
                        </p>
                        <div>
                            <h1 className="project-subheader" id="table-1">Table 1: Driving schedule test results</h1>
                            <table class="tftable" border="1">
                            <tr><th>Driving Schedule</th><th>Avg Speed (mph)</th><th>Avg Speed (km/h)</th><th>Runtime (hrs)</th><th>Distance Traveled (km)</th><th>Total Energy Used (Wh)</th><th>Energy per Km (Wh)</th></tr>
                            <tr><td>UDDS</td><td>19.58</td><td>31.51</td><td>1.038</td><td>32.70</td><td>5987.34</td><td>183.07</td></tr>
                            <tr><td>HWYFET</td><td>48.20</td><td>77.58</td><td>0.403</td><td>31.27</td><td>5936.18</td><td>189.85</td></tr>
                            <tr><td>US06</td><td>47.96</td><td>77.19</td><td>0.285</td><td>22.00</td><td>5682.61</td><td>258.31</td></tr>
                            <tr><td>LA92</td><td>24.61</td><td>39.60</td><td>0.718</td><td>28.45</td><td>5871.15</td><td>206.38</td></tr>
                            </table>
                        </div>
                        <h1 className="project-header" id="cooling">Cooling</h1>
                        <p className="project-description">
                            Three options for accumulator cooling were investigated, including forced air cooling, composite phase change materials, and liquid cooling.<br/> <br/> 
                            After careful consideration of the three options, air cooling was chosen to maintain the thermal performance of the accumulator. The combination of low-weight, cost, and simplicity outweighed any potential drawbacks in performance <br/><br/>  
                            Below is a video of the fan controls on the Accumulator Control Board (ACB) being tested!<br/>
                        </p>
                        <h1 className="project-subheader" id="video-1">Accumulator Fan Test</h1>
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="https://youtube.com/embed/TYOCjgeFkfI"></iframe>
                        </div>
                        <br/>
                    </div>
                </div>
            ]}
            />
        )
    }
}

export default BatteryMK1
