import React from 'react';
import Resume from './../../docs/jessie-boudreau-resume.pdf'
import './Footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="grey darken-2" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
            <h5 className="title">Education</h5>
            <hr size="6" width="100%" align="left" color="white"></hr>
            <p>
              McMaster University<br/>
              Bachelor of Technology,<br/> 
              Power & Energy Engineering<br/>
              Graduation: Spring 2020
            </p>
            <p>
              Conestoga College<br/>
              Advanced Diploma,<br/> 
              Energy Systems Engineering<br/>
              Graduated: Spring 2017
            </p>
          </MDBCol>
          <MDBCol md="3">
          <h5 className="title">Experience</h5>
          <hr size="6" width="100%" align="left" color="white"></hr>
            <p>
              Undergraduate Research Assisstant<br/>
              McMaster Automotive Resource Centre<br/> 
              McMaster University<br/>
              Since: January, 2020
            </p>
            <p>
              Team Captain<br/>
              MAC Formula Electric<br/> 
              McMaster University<br/>
              Since: May, 2019
            </p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Connect</h5>
            <hr size="6" width="100%" align="left" color="white"></hr>
            <ul>
                <a className="btn" href="https://www.linkedin.com/in/jessie-boudreau-46203ba5/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-linkedin"></i> LinkedIn
                </a>
                <a className="btn" href="https://github.com/jessieboudreau" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-github"></i> GitHub
                </a>
                <a className="btn" href={Resume} target="_blank" rel="noopener noreferrer">
                  <i class="far fa-file"></i> Resume
                </a>
                <a className="btn" href="mailto:jessie.boudreau@live.ca" target="_blank" rel="noopener noreferrer">
                  <i class="far fa-envelope"></i> Email
                </a>
            </ul>
          </MDBCol>
          <MDBCol md="3" className="project-list">
            <h5 className="title">Projects</h5>
            <hr size="6" width="100%" align="left" color="white"></hr>
            <a href="/atmospheric-water-generator">Atmospheric Water Generator</a><br/>
            <a href="/cell-board-tester">Battery Cell Board Tester</a><br/>
            <a href="/coming-soon">Capstone Battery Design</a><br/>
            <a href="/coming-soon">Charging Cart</a><br/>
            <a href="/coming-soon">Electric Vehicle Charger</a><br/>
            <a href="/coming-soon">Inverter & MCU Enclosure</a><br/>
            <a href="/accumulator">Electric Accumulator</a><br/>
            <a href="/wiring-harness">Wiring Harness</a><br/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.jessieboudreau.com"> Jessie Boudreau </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
