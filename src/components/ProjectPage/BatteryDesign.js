import React, { Component } from 'react'


import topdown from './../../img/placeholder.png';
import sidepodlayup from './../../img/placeholder.png';
import highlight from './../../img/placeholder.png';
import onfloor from './../../img/placeholder.png';
import real from './../../img/placeholder.png';

import ProjectPage from './ProjectPage';

export class Aerodynamics extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            
            <ProjectPage
            title="Aerodynamic Development"
            images={[
                {image: highlight,
                description:"Model of our vehicle, aerodynamics highlighted"},
                {image: topdown,
                description:"Full car CFD simulation to analyze performance"},
                {image: sidepodlayup,
                description:"Side pod being layed up for infusion"},
                {image: onfloor,
                description:"Completed aero-pack components"},
                {image: real,
                description:"Completed package mounted on car"}]}
            description="Leading the aerodynamic subteam, we design and manufacture components to increase our vehicles performance - increasing downforce to allow better handling around corners and reducing drag to increase efficiency. In the 2019 season my primary responsibility was in manufacturing all the components.  Using the VARTM manufacturing method, i created custom molds and manufactured the carbon-fibre (CFRP - Carbon Fibre Reinforced Polymer) components for the aerodynamic package.  The components i was responsible for manufacturing were; front wing, side pods, nose cone, undertray and rear wing.  In the 2020 season my responsiblity is with management of development for the new aerodynamic package.  With the knowledge we have gained in the previous season, we have a better understanding of our limitations with manufacturing and can increase the complexity of our components accordingly."
            />
        )
    }
}

export default Aerodynamics
