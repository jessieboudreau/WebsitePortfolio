import React, { Component } from 'react'


import original from './../../img/battery-design/original.png';
import exploded from './../../img/battery-design/exploded-container-view.png';
import cells from './../../img/battery-design/cells.png';
import packaging from './../../img/battery-design/packaging.png';
import thermalModel from './../../img/battery-design/thermal-model.png';
import ProjectPage from './ProjectPage';

export class CapstoneBattery extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (

            <ProjectPage
            title="Capstone Battery Design"
            group="McMaster University"
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

            contents={[
                <div>
                    <h1 className="project-header">Overview</h1>
                    <p className="project-description">
                        Our Accumulator consists of 138 indiviual lithium-ion pouch cells, with a total voltage of 600V.  Given the risk associated with handling this package, we required proper documentation for the assembly procedure. I created this procedure using SolidWorks Composer, creating snapshots and a full animation for our plan for assembly.  Once this was completed and a select few members received high-voltage certifications, we were able to source the proper resources and supervision for the assembly of our battery, a major milestone in the completion of our vehicle.
                    </p>
                </div>
            ]}
            />
        )
    }
}

export default CapstoneBattery
