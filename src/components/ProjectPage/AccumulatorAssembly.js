import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import fullrender from './../../img/placeholder.png';
import topview from './../../img/placeholder.png';
import attachment from './../../img/placeholder.png';
import air from './../../img/placeholder.png';
import screenshot from './../../img/placeholder.png';


export class AccumulatorAssembly extends Component {
    render() {
        return (
            <ProjectPage
            title="Accumulator Assembly"
            images={[{image:fullrender,
            description:"Cutaway of enclosure to show cell configuration"},
            {image:topview,
            description:"Top view; cell stacks and AMS configuration"},
            {image:attachment,
            description:"Cell stacks separated using kevlar shielding"},
            {image:air,
            description:"Screenshot of assembly animation"},
            {image:screenshot,
            description:"Screenshot of assembly animation"}
        ]}
            description="Our Accumulator consists of 138 indiviual lithium-ion pouch cells, with a total voltage of 600V.  
                        Given the risk associated with handling this package, we required proper documentation for the assembly 
                        rocedure.  I created this procedure using SolidWorks Composer, creating snapshots and a full animation 
                        for our plan for assembly.  Once this was completed and a select few members received high-voltage 
                        certifications, we were able to source the proper resources and supervision for the assembly of our 
                        battery, a major milestone in the completion of our vehicle."
            />
        )
    }
}

export default AccumulatorAssembly
