import React from 'react';
import './App.css';
import { BrowserRouter as Router,  Route} from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import Footer from './components/footer/Footer';
import BatteryDesign from './components/ProjectPage/AccumulatorMK1';
import WiringHarness from './components/ProjectPage/WiringHarness';
import cellBoard from './components/ProjectPage/CellBoardTester';
import waterGenerator from './components/ProjectPage/AWG';
import CapstoneBattery from './components/ProjectPage/CapstoneBattery';
import ScrollToTopBtn from "./components/ScrollToTop/ScrollToTop";
import comingSoon from "./components/ProjectPage/ComingSoon";

function App() {
  return (
      <div>
          <Router>
            {/* <link href="https://fonts.googleapis.com/css?family=Rajdhani:520,600|Ubuntu&display=swap" rel="stylesheet"/> */}
            <div className="app">
              <Route exact path="/"
                component={HomePage}/>
              <Route path="/ev-battery" 
                component={BatteryDesign} />
              <Route path="/capstone-battery" 
                component={CapstoneBattery} />
              <Route path="/wiring-harness" 
                component={WiringHarness} />
              <Route path="/cell-board-tester" 
                component={cellBoard} />
              <Route path="/atmospheric-water-generator" 
                component={waterGenerator} />
              <Route path="/coming-soon"
                component={comingSoon} />
            </div>
          </Router>
          <Footer/>
          <ScrollToTopBtn/>
      </div>
  );
}

export default App;
