import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import wiringharness from './../../img/placeholder.png';
import wiringtopview from './../../img/placeholder.png';
import wiringfronview from './../../img/placeholder.png';
// import justwires from './../../img/WiringHarness/nervous.png';
// import wiringtable from './../../img/WiringHarness/wiring-table.png';


export class WiringHarness extends Component {
    render() {
        return (
            <ProjectPage 
            title="Wiring Harness Model and Routing"
            images={[
                {image:wiringharness,
                description:"Full view of the Wiring Harness Model"}, 
                {image:wiringtopview,
                description:"Top view of the connections to the BCM (Body Control Module)"}, 
                {image:wiringfronview,
                description:"Front View of the Wiring Harness Model"}, 
                // {image:justwires,
                // description:"View of only the wires and connectors"}, 
                // {image:wiringtable,
                // description:"Wires created and organized before installation"}
            ]}
            description="The wiring harness model was developed to provide a general plan for routing throughout the vehicle, ensuring that all the neccessary connections are accounted for and all rules - regarding the position of high voltage wiring - were satisfied.  I created this model in solidworks to provide the structure for us to manufacture and install this harness, completing a major milestone in the completion of the vehicle.  The harness contains all low voltage connections responsible for communication and sensor data, and the high-voltage wiring repsonsible for providing power to our four in-hub motors.  After the model was completed, the electrical lead (Scott Sutherland) and I manufactured all the wires necessary, tested the harness and installed it into the vehicle."
            />
        )
    }
}

export default WiringHarness
