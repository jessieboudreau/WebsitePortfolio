import React, { Component } from 'react'
import original from './../../img/charging-cart/';
import cellsInstalled from './../../img/charging-cart/';
import chamber from './../../img/charging-cart/';
import fixture from './../../img/charging-cart/';
import assembled from './../../img/charging-cart/';
import voltVcap from './../../img/charging-cart/';
import resVsoc from './../../img/charging-cart/';
import ProjectPage from './ProjectPage';

export class BatteryMK1 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {

        return (

            <ProjectPage
            title="Charging Cart"
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
                    A battery cell from the current accumulator pack was thoroughly tested at the MARC facility in order to provide baseline metrics of cell performance. Baseline cell performance metrics of the existing cells will allow us essentially to validating performance improvements between the new battery cells and the existing cells.<br/><br/>
                    The charge and discharge characteristics of the current accumulator cells were obtained using a specialized battery cycler inside of a thermal chamber (to maintain a constant temperature of 25°C). The cells charge-discharge cycles were completed at 0.05C, 0.5C, 1C, 2C, 3C and 5C.<br/>
                    </p>
                    <br/>
                    <h1 className="project-subheader">Figure 1: Voltage vs. C-Rate (25°C)</h1>
                    <img src={voltVcap} className="figure"></img>
                    <br/><br/>
                    <p className="project-description">
                    The results of the test above indicate that the effective capacity of the cell decreases as the power drawn from the cell increases. This is a result of the internal resistance of the cell, shown in Figure 2, dissipating more power as the current drawn from the cell increases.<br/>
                    </p>
                    <br/>
                    <h1 className="project-subheader">Figure 2: Cell Internal Resistance vs. State of Charge (25°C)</h1>
                    <img src={resVsoc} className="figure"></img>
                    <br/>
                    <div>
                        <h1 className="project-subheader">Table 1: Driving schedule test results</h1>
                        <table class="tftable" border="1">
                        <tr><th>Driving Schedule</th><th>Avg Speed (mph)</th><th>Avg Speed (km/h)</th><th>Runtime (hrs)</th><th>Distance Traveled (km)</th><th>Total Energy Used (Wh)</th><th>Energy per Km (Wh)</th></tr>
                        <tr><td>UDDS</td><td>19.58</td><td>31.51</td><td>1.038</td><td>32.70</td><td>5987.34</td><td>183.07</td></tr>
                        <tr><td>HWYFET</td><td>48.20</td><td>77.58</td><td>0.403</td><td>31.27</td><td>5936.18</td><td>189.85</td></tr>
                        <tr><td>US06</td><td>47.96</td><td>77.19</td><td>0.285</td><td>22.00</td><td>5682.61</td><td>258.31</td></tr>
                        <tr><td>LA92</td><td>24.61</td><td>39.60</td><td>0.718</td><td>28.45</td><td>5871.15</td><td>206.38</td></tr>
                        </table>
                    </div>
                    <br/>

                    <h1 className="project-header">Cooling</h1>
                    <p className="project-description">
                    Three options for accumulator cooling were investigated, including forced air cooling, composite phase change materials, and liquid cooling.<br/> <br/> 
                    After careful consideration of the three options, air cooling was chosen to maintain the thermal performance of the accumulator. The combination of low-weight, cost, and simplicity outweighed any potential drawbacks in performance <br/><br/>  
                    Below is a video of the fan controls being tested!<br/> <br/> 
                    </p>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://youtube.com/embed/TYOCjgeFkfI"></iframe>
                    </div>
                </div>
            ]}
            />
        )
    }
}

export default BatteryMK1
