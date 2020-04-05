import React from 'react';
import './App.css';
import { BrowserRouter as Router,  Route} from 'react-router-dom';

import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import BatteryDesign from './pages/Projects/AccumulatorMK1';
import cellBoard from './pages/Projects/CellBoardTester';
import waterGenerator from './pages/Projects/AtmosphericWaterGenerator';
import CapstoneBattery from './pages/Projects/CapstoneBattery';
import ScrollToTopBtn from "./components/ScrollToTop/ScrollToTop";
import comingSoon from "./pages/Projects/ComingSoon";

function App() {
  return (
      <div>
          <Router>
            {/* <link href="https://fonts.googleapis.com/css?family=Rajdhani:520,600|Ubuntu&display=swap" rel="stylesheet"/> */}
            <div className="app">

                {/* Parent pages paths */}
              <Route exact path="/"
                component={Home}/>

                {/* Projects paths */}
              <Route path="/projects/mac-formula-electric/ev-battery" 
                component={BatteryDesign} />
              <Route path="/projects/mcmaster-university/capstone-battery" 
                component={CapstoneBattery} />
              <Route path="/projects/mac-formula-electric/cell-board-tester" 
                component={cellBoard} />
              <Route path="/projects/conestoga-college/atmospheric-water-generator" 
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
