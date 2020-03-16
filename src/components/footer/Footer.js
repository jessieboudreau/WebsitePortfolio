import React from 'react';
import Resume from './../../docs/jessie-boudreau-resume.pdf'
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="grey darken-2" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
            <h5 className="title">Education</h5>
            <hr size="6" width="90%" align="left" color="white"></hr>
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
          <hr size="6" width="90%" align="left" color="white"></hr>
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
            <hr size="6" width="90%" align="left" color="white"></hr>
            <ul>
                <li className="btn">
                    <a href="https://www.linkedin.com/in/jessie-boudreau-46203ba5/" target="_blank" rel="noopener noreferrer">LinkedIn </a>
                </li>  
                <li className="btn">
                    <a href="https://github.com/jessieboudreau" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
                <li className="btn">
                        <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
                </li>
                <li className="btn">
                    <a href="mailto:jessie.boudreau@live.ca" target="_blank" rel="noopener noreferrer">Email</a>
                </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Projects</h5>
            <hr size="6" width="90%" align="left" color="white"></hr>
            <ul>
                <li className="list-unstyled">
                <a href="/atmospheric-water-generator">Atmospheric Water Generator</a>
              </li>  
              <li className="list-unstyled">
                <a href="/cell-board-tester">Battery Cell Board Tester</a>
              </li>
              <li className="list-unstyled">
                <a href="/accumulator-MK1">FSAE-E Accumulator MK I</a>
              </li>
              <li className="list-unstyled">
                <a href="/wiring-harness">Wiring Harness</a>
              </li>
            </ul>
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
