import React, { Component } from 'react'
import ProjectPage from './ProjectPage';
import ComboChart from './../../components/Charts/ComboChart'

import battCut from './../../img/CapstoneBattery/battery-cut.png';
import battFront from './../../img/CapstoneBattery/batt-front.png';
import popOut from './../../img/CapstoneBattery/popped-out.png';
import oneModule from './../../img/CapstoneBattery/one-module.png';
import chassisCut from './../../img/CapstoneBattery/chassis-cut.png';
import voltVcap from './../../img/CapstoneBattery/voltvcap.png';

const DriveCycle = [
    {
        series1: 
            {
                name: 'Instantaneous',
                type: 'area',
                data: [5.062395557, 5.325257276, 51.54504535, 5.814146778, 48.70046971, 80, 59.40594059, 0, 11.59862821, 4.951603017, 45.70129727, 5.957496255, 65.02598774, 33.23076923, 21.92225822, 80, 40, 0.146241948, 17.14021577, 71.4783081, 12.03075468, 60.6366541, 33.08856536, 36.86208425, 20.29850746, 20.80584847, 80, 49.68421053, 0.278957476, 37.54138967, 36.8491332, 52.9831031, 30.14492754, 15.812638, 54.82205234, 80, 80, 28.73786408, 18.4312428, 1.629749008, 72.87782659, 0, 50.43522966, 29.05180786, 50.47281319, 0.706388866, 68.92680023, 70.44220072, 30.8434037, 14.62538556, 50.08689212, 48.90255401, 18.09091132, 42.64243151, 48.04322644, 80, 28.18181818, 1.087554019, 21.83842837, 67.30957515, 47.66766861, 1.39086261, 34.77289384, 23.82429205, 2.816583718, 59.00649858, 80, 80, 36.36363636, 0, 0, 55.68711227, 75.61643836, 15.7030412, 9.46900638, 42.40963855, 36.85521298, 72.08233433, 40.85106383, 0, 3.91187044, 46.40053617, 57.93114622, 76.49800206, 80, 80]
            }
        },
    {
        series2: 
            {
                name: 'Average',
                type: 'line',
                data: [39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985, 39.88444985]
            }
        },
    {
        xAxis: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85]
    },
]

export class BatteryMK1 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (

            <ProjectPage
            title="FSAE-E Accumulator MK 2"
            group="McMaster University"
            images={[
                {
                    src: battCut,
                    title: "Front isometric render with the lid and electronics hidden"
                },
                {
                    src: battFront,
                    title: "Rear isometric render with the lid and electronics hidden"
                },
                {
                    src: popOut,
                    title: "Rear isometric render with the lid and electronics hidden"
                },
                {
                    src: oneModule,
                    title: "Rear isometric render with the lid and electronics hidden"
                },
                {
                    src: chassisCut,
                    title: "Rear isometric render with the lid and electronics hidden"
                },
                ]}

            contents={[
                <div width="100%">
                    <div class="section-nav">
                        <ol>
                            <li className="contents-list"><a href="#overview">Overview</a></li>
                            <li className="contents-list"><a href="#cell-performance">Cell Performance</a>
                                <ul>
                                    <li className="contents-list"><a href="#table-1">Table 1: Comparison Between Previous and New Cells</a></li>
                                    <li className="contents-list"><a href="#figure-1">Figure 1: Discharge Voltage vs. C-Rate (25°C), Sony VTC6 Cell</a></li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                    <div className="project-description-container">
                        <h1 className="project-header" id="overview">Overview</h1>
                        <p className="project-description">
                            The focal point of this project was to improve on the previous battery pack design. This criteria was checked against a number of metrics including energy density, peak power, and efficiency. My roles in this project include pack energy optimization, cell selection, cell configuration, and internal packaging. Other members of the MAC Formula Electric team supported this project in the areas of PCB development, thermal management, and vehicle pacakging and integration.
                            <br/>
                        </p>
                        <h1 className="project-header" id="cell-performance">Cell Performance</h1>
                        <p className="project-description">
                            Once the decision to use 18650 cylindrical cells was made, many different cells were considered. After substantial research, it was determined that the Sony VTC6 was the best choice for our application. Below is the table comparing specifications of the previous cell and the new VTC6.<br/>
                        </p>
                        <div>
                            <h1 className="project-subheader" id="table-1">Table 1: Comparison Between Previous and New Cells </h1>
                            <table class="tftable" border="1">
                            <tr><th></th><th>Kokam SLPB60205130H</th><th>Sony VTC6</th></tr>
                            <tr><td>Size</td><td>217 mm x 137 mm x 6.1 mm</td><td>18650</td></tr>
                            <tr><td>Style</td><td>Pouch Cell</td><td>Flat Top</td></tr>
                            <tr><td>Protected?</td><td>No</td><td>No</td></tr>
                            <tr><td>Nominal Capacity</td><td>13000 mAh</td><td>3000 mAh</td></tr>
                            <tr><td>Continuous Discharge Rating</td><td>8 C (104A)</td><td>15 C (45A)</td></tr>
                            <tr><td>Nominal Voltage</td><td>3.7 V</td><td>3.6 V</td></tr>
                            <tr><td>Approximate Weight</td><td>322 g</td><td>46.6 g</td></tr>
                            <tr><td>Energy Density</td><td>149 Wh/kg</td><td>237 Wh/kg</td></tr>
                            </table>
                        </div>
                        <h1 className="project-subheader" id="figure-1">Figure 1: Discharge Voltage vs. C-Rate (25°C), Sony VTC6 Cell</h1>
                        <img src={voltVcap} className="figure" />
                        {/* <ComboChart data={DriveCycle} /> */}
                        <br/><br/>
                        <p className="project-description">
                            The discharge characteristics of the Sony VTC6 cell and the Kokam SLPB60205130H differ at higher discharge rates. The Kokam cell exhibits a loss of capacity at higher C-rates, whereas the Sony VTC6 exhibits very similar discharge characteristics and capacity at all tested C-rates.<br/>
                        </p>
                    </div>
                </div>
            ]}
            />
        )
    }
}

export default BatteryMK1
