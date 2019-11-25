import React from 'react';
import './Footer.css';

export function footer() {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="name-container">
                    <p className="footer-name">Jessie Boudreau &nbsp;<span className="footer-name-span">|&nbsp;</span><span className="footer-name-span"> 2019</span><br></br>
                        <span className="footer-name">McMaster University<br></br></span>
                        <span className="footer-name">Bachelor of Technology, </span>
                        <span className="footer-name">Power & Energy Enegineering</span>
                    </p>
                    {/* <div className="follow-list-container">
                        <ul>
                            <li><a href="https://twitter.com/macformula" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="https://www.instagram.com/macformulaelectric/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a></li> 
                            <li><a href="https://www.facebook.com/MACFormulaElectric/" target="_blank" rel="noopener noreferrer">Facebook</a></li> 
                        </ul>
                    </div> */}
                </div>
                <div className="made-with-container">
                    <h1>Made With&nbsp;
                        <span className="love">
                            <i class="fa fa-heart"></i>
                        </span> In Canada</h1>
                </div> 
            </div>
        </div>
    )
}

export default footer
