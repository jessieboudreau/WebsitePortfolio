import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router,  Route} from 'react-router-dom';
import { loadReCaptcha } from 'react-recaptcha-google'

import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import batteryDesign from './pages/Projects/AccumulatorMK1';
import cellBoard from './pages/Projects/CellBoardTester';
import waterGenerator from './pages/Projects/AtmosphericWaterGenerator';
import capstoneBattery from './pages/Projects/CapstoneBattery';
import ScrollToTopBtn from "./components/ScrollToTop/ScrollToTop";
import inverterEnclosure from "./pages/Projects/InverterEnclosure";
import chargerEnclosure from "./pages/Projects/ChargerEnclosure";
import chargingCart from "./pages/Projects/ChargingCart";
import batteryCycler from "./pages/Projects/BatteryCycler";

function App() {
  
  useEffect(() => {
    loadReCaptcha();
  })

  return (
      <div className="App">
        <div className="main">
          <Router>
            {/* <link href="https://fonts.googleapis.com/css?family=Rajdhani:520,600|Ubuntu&display=swap" rel="stylesheet"/> */}
            <div>

                {/* Parent pages paths */}
              <Route exact path="/"
                component={Home}/>

                {/* Projects paths */}
              <Route path="/projects/mac-formula-electric/battery-mk1/" 
                component={batteryDesign} />
              <Route path="/projects/mac-formula-electric/charging-cart/"
                component={chargingCart} />
              <Route path="/projects/mac-formula-electric/cell-board-tester/" 
                component={cellBoard} />
              <Route path="/projects/mac-formula-electric/inverter-enclosure/" 
                component={inverterEnclosure} />
              <Route path="/projects/mac-formula-electric/charger-enclosure/" 
                component={chargerEnclosure} />
              <Route path="/projects/mac-formula-electric/battery-mk2/" 
                component={capstoneBattery} />
              <Route path="/projects/mcmaster/battery-cycler/" 
                component={batteryCycler} />
              <Route path="/projects/conestoga/atmospheric-water-generator/" 
                component={waterGenerator} />
            </div>
          </Router>
        </div>
        <Footer/>
        <ScrollToTopBtn/>
      </div>
  );
}

export default App;
