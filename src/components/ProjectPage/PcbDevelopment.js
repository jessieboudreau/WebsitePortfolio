import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import frontwingimg from './../../img/placeholder.png';
import oncar from './../../img/placeholder.png';
import fronwingcut from './../../img/placeholder.png';
import frontwingstream from './../../img/placeholder.png';
import frontwingiso from './../../img/placeholder.png';



export class FrontWing extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <ProjectPage
            title="Front Wing Development and Analysis"
            images={[
                {image:frontwingimg,
                description:"Front wing render"},
                {image:oncar,
                description:"Highlighted on car model"},
                {image:fronwingcut,
                description:"cut-away to dislay ribs and spar"},
                {image:frontwingiso,
                description:"Analyzed using iterations of CFD"},
                {image:frontwingstream,
                description:"Streamlines seen from the top"},
                
            ]}
            description="The front wing is a crucial component in the aerodynamic package. Being the first piece that will interact with the air flow, how the wing manages the air will affect all other components of the aerodynamic package.  The design consisted of multiple iterations of modelling and CFD (computational fluid dynamics) to achieve the best possible results.  The main structure of the wing consists of two 'sandwiched' foils with an array of ribs and a single spar.  This design allows the component to be both lightweight and stiff to resist the different loads it will encounter on the track." />
        )
    }
}

export default FrontWing
