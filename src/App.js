import React from 'react';
import './App.css';
import { BrowserRouter as Router,  Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import About from './components/AboutPage/AboutPage';
import BatteryDesign from './components/ProjectPage/BatteryDesign';
import WiringHarness from './components/ProjectPage/WiringHarness';
import pcbDevelopment from './components/ProjectPage/PcbDevelopment';
import WaterGenerator from './components/ProjectPage/AtmosphericWaterGenerator';

function App() {
  return (
    <Router>
      <link href="https://fonts.googleapis.com/css?family=Rajdhani:520,600|Ubuntu&display=swap" rel="stylesheet"/>
      <div className="app">
        <Route exact path="/"
          component={HomePage}/>
        {/* <Route exact path="/"
          component={About}/>   */}
        <Route path="/battery-design" 
          component={BatteryDesign} />
        <Route path="/wiring-harness" 
          component={WiringHarness} />
        <Route path="/pcb-development" 
          component={pcbDevelopment} />
        <Route path="/atmospheric-water-generator" 
          component={WaterGenerator} />
      </div>
    </Router>
  );
}

export default App;
