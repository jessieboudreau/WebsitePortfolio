import React, { Component } from 'react'
import Iso from './../../img/ChargingCart/iso.JPG';
import Front from './../../img/ChargingCart/front.JPG';
import Back from './../../img/ChargingCart/back.JPG';
import sideA from './../../img/ChargingCart/side-a.JPG';
import sideB from './../../img/ChargingCart/side-b.JPG';
import ProjectPage from './ProjectPage';

export class BatteryMK1 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {

        return (

            <ProjectPage
            title="Charging Cart"
            group="MAC Formula Electric"
            images={[
                {
                    src: Iso,
                    alt: "",
                    title: "Isometric rendering"
                },
                {
                    src: Front,
                    alt: "",
                    title: "Front rendering"
                },
                {
                    src: Back,
                    alt: "",
                    title: "Back rendering"
                },
                {
                    src: sideA,
                    alt: "",
                    title: "Side-a rendering"
                },
                {
                    src: sideB,
                    alt: "",
                    title: "Side-b rendering"
                },
                ]}

                contents={[
                    <div width="100%">
                        <div class="section-nav">
                            <ol>
                                <li className="contents-list"><a href="#overview">Overview</a></li>
                                <li className="contents-list"><a href="#frame-design">Frame Design</a>
                                    <ul>
                                        <li className="contents-list"><a href="#table-1">Table 1: Bill of Materials</a></li>
                                        <li className="contents-list"><a href="#table-2">Table 2: Cut List</a></li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                        <div className="project-description-container">
                            <h1 className="project-header" id="overview">Overview</h1>
                            <p className="project-description">
                                The charging cart serves as a secure method of transporting, charging, and working on the high 
                                voltage battery. This cart was designed using 4040 aluminum extrusion for the frame and 
                                varnished birch for the charger platform and the top surface (not shown). The cart is also 
                                fitted with a deadman braking system designed to stop the cart from rolling unintentionally.
                            </p>
                            <h1 className="project-header" id="frame-design">Frame Design</h1>
                            <p className="project-description">
                                The frame is designed with a few key considerations. The first is that the cart must come to an 
                                immediate stop if the operator is to let go. This is achieved by only having casters on the far 
                                end so the operator is required to lift the cart sligthly to maneuver. The second is that the 
                                cart must aid in removing the battery from the vehicle. Since the battery slides out of the 
                                back of the car, the inner-width of the cart is greater than the outer-width of the car. 
                                That way the battery can be pulled out of the car and directly onto the cart without any 
                                strain on the operator.<br/><br/>
                                <a href="#table-1">Table 1</a> & <a href="#table-2">Table 2</a> detail the requirements for construction of the cart.
                            </p>
                            <div>
                                <h1 className="project-subheader" id="table-1">Table 1: Bill of Materials</h1>
                                <table class="tftable" border="1">
                                <tr><th>Item No.</th><th>Description</th><th>Qty.</th><th>Unit</th></tr>
                                <tr><td>1</td><td>80/20 40-4040 PROFILE</td><td>426.82</td><td>mm</td></tr>
                                <tr><td>2</td><td>40x40-end-cap-black</td><td>8</td><td>count</td></tr>
                                <tr><td>3</td><td>40x40-angle-bracket-set</td><td>26</td><td>count</td></tr>
                                <tr><td>4</td><td>Bolts</td><td>52</td><td>count</td></tr>
                                <tr><td>5</td><td>Slot Nuts</td><td>52</td><td>count</td></tr>
                                <tr><td>6</td><td>Handle</td><td>1</td><td>count</td></tr>
                                <tr><td>7</td><td>Shelf (17.12x26.13x0.75) inches</td><td>1</td><td>count</td></tr>
                                <tr><td>8</td><td>Casters, 3in</td><td>2</td><td>count</td></tr>
                                <tr><td>9</td><td>Extrusion Foot Plates</td><td>2</td><td>count</td></tr>
                                </table>
                            </div>
                            <div>
                                <h1 className="project-subheader" id="table-2">Table 2: Cut List</h1>
                                <table class="tftable" border="1">
                                <tr><th>Item No.</th><th>Description</th><th>Length</th><th>Qty.</th></tr>
                                <tr><td>1.1</td><td>80/20 40-4040 PROFILE</td><td>40.18</td><td>4</td></tr>
                                <tr><td>1.2</td><td>80/20 40-4040 PROFILE</td><td>26.43</td><td>2</td></tr>
                                <tr><td>1.3</td><td>80/20 40-4040 PROFILE</td><td>33.39</td><td>2</td></tr>
                                <tr><td>1.4</td><td>80/20 40-4040 PROFILE</td><td>22.98</td><td>4</td></tr>
                                <tr><td>1.5</td><td>80/20 40-4040 PROFILE</td><td>17.23</td><td>2</td></tr>
                                <tr><td>1.6</td><td>80/20 40-4040 PROFILE</td><td>10.04</td><td>2</td></tr>
                                </table>
                            </div>
                        </div>
                    </div>
                ]}
            />
        )
    }
}

export default BatteryMK1
