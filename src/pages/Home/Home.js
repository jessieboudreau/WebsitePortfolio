import React, { Component } from 'react'
import ProfileBox from '../../components/ProfileBox/ProfileBox';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import AboutMe from '../../components/AboutMe/AboutMe';
import ProjectTiles from '../../components/ProjectTiles/ProjectTiles';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import DocList from '../../components/ExpansionList/ExpansionList';
import 'react-web-tabs/dist/react-web-tabs.css';
import './Home.css'; 


export class HomePage extends Component {
    state = {
        loaded:true,
        loadingElement:<LoadingSpinner/>,
    }

    render() {
        return (
            <div>
                {/* Profile box view */}
                <ProfileBox/>

                {/* About me view */}
                <AboutMe/>

                {/* Tab View section */}
                <div className="tabs-container">
                    <Tabs
                        defaultTab="one"
                        onChange={(tabId) => { console.log(tabId) }}
                    >
                        <TabList>
                            <Tab className="tab-name" tabFor="one">Projects</Tab>
                            <Tab className="tab-name" tabFor="two">Documents</Tab>
                        </TabList>
                        <TabPanel tabId="one">
                            <ProjectTiles/>
                        </TabPanel>
                        <TabPanel className="tab-panel" tabId="two">
                            <DocList/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default HomePage
