import React, { Component } from 'react'
import ProfileBox from './../ProfileBox/ProfileBox';
import ProjectView from './../ProjectView/ProjectView';

export class HomePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div>
                    <ProfileBox home="is-home"/>
                    <ProjectView />
                </div>
            </div>
        )
    }
}

export default HomePage
