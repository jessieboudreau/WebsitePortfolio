import React, { Component } from 'react'


import original from './../../img/battery-design/original.png';
import exploded from './../../img/battery-design/exploded-container-view.png';
import cells from './../../img/battery-design/cells.png';
import packaging from './../../img/battery-design/packaging.png';
import thermalModel from './../../img/battery-design/thermal-model.png';

import ProjectPage from './ProjectPage';

export class AWG extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            
            <ProjectPage
            title="Atmospheric Water Generator"
            images={[
                {image: original,
                description:"Model of the 2018 vehicle battery, also referred to as the 'Accumulator'"},
                {image: exploded,
                description:"Exploded view of the Accumulator's Kevlar & carbon fiber container"},
                {image: cells,
                description:"Prismatic pouch cell packaging with Kevlar mounting sleeves"},
                {image: packaging,
                description:"Vehicle packaging design"},
                {image: thermalModel,
                description:"Accumulator pack thermal model"}]}
            description="Leading the aerodynamic subteam, we design and manufacture components to increase our vehicles performance - increasing downforce to allow better handling around corners and reducing drag to increase efficiency. In the 2019 season my primary responsibility was in manufacturing all the components.  Using the VARTM manufacturing method, i created custom molds and manufactured the carbon-fibre (CFRP - Carbon Fibre Reinforced Polymer) components for the aerodynamic package.  The components i was responsible for manufacturing were; front wing, side pods, nose cone, undertray and rear wing.  In the 2020 season my responsiblity is with management of development for the new aerodynamic package.  With the knowledge we have gained in the previous season, we have a better understanding of our limitations with manufacturing and can increase the complexity of our components accordingly."
            />
        )
    }
}

export default AWG
