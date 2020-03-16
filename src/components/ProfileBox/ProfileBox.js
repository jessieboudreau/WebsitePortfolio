import React, { Component } from 'react'
import './ProfileBox.css';

export class ProfileBox extends Component {
    render() {
        return (
            <div className="profile-box-container">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className="profile-box-name-container">
                    {/* <img class="avatar" src='https://media.licdn.com/dms/image/C5603AQEatH7-ceCsiA/profile-displayphoto-shrink_200_200/0?e=1578528000&v=beta&t=teXEdJhtYi5buC9CCJr-jSghyBB5G117dXAuxNBr73s' alt="Avatar"></img> */}
                    <h1 className="profile-box-name">Jessie Boudreau</h1>
                </div>
            </div>
        )
    }
}

export default ProfileBox
