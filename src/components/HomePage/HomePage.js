import React, { Component } from 'react'
import ProfileBox from './../ProfileBox/ProfileBox';
import LoadingSpinner from './../../components/loadingspinner/LoadingSpinner';
import ProjectView from './../ProjectView/ProjectView';

export class HomePage extends Component {
    constructor(){
        super()
        this.state = {
            loaded:true,
            loadingElement:<LoadingSpinner/>
        }}

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
