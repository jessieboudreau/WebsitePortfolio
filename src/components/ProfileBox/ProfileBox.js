import React, { Component } from 'react'
import './ProfileBox.css';

export class ProfileBox extends Component {
    render() {
        return (
            <div id="topSection" className="profile-box-container">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className="profile-box-name-container">
                    <h1 className="profile-box-name">Jessie Boudreau</h1>
                </div>
            </div>
        )
    }
}

export default ProfileBox
