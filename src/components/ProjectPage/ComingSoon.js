import React, { Component } from 'react'
import ProjectPage from './ProjectPage';
import Soon from './../../img/ComingSoon/coming-soon-message-illuminated.jpg';

export class ComingSoon extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {

        return (

            <ProjectPage
            title=""
            images={[
                {image:Soon,
                description:""},
            ]}
            contents={[
                <div>
                    {/* <h1 className="soon-header">In Progress...<span><i class="fas fa-tools"></i></span></h1>
                    <hr size="6" width="50%" align="center" color="grey"></hr> */}
                </div>
            ]}
            />
        )
    }
}

export default ComingSoon