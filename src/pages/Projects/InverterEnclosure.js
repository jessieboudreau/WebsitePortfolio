import React, { Component } from 'react'
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
                    src: "",
                    title: "",
                    description: ""
                },
                ]}

            contents={[
                <div width="100%">

                </div>
            ]}
            />
        )
    }
}
export default BatteryMK1
