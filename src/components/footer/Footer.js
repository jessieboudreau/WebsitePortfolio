import React from 'react';
import './Footer.css';
import resume from './../../docs/jessie-boudreau-resume.pdf'

export function footer() {
    return (
        <div className="footer-container">
            <div className="row footer">
                <div className="column name-container">
                    <p className="footer-name">Jessie Boudreau<span>&nbsp;|&nbsp;</span><span> 2019</span><br></br>
                        <span>McMaster University<br></br></span>
                        <span>Bachelor of Technology,<br></br></span>
                        <span>Power & Energy Enegineering</span>
                    </p>
                </div>
                <div className="column link-container-wrapper">
                        <a className="link-container" href="https://www.linkedin.com/in/jessie-boudreau-46203ba5/" target="_blank" rel="noopener noreferrer">
                            <i class="fa fa-linkedin"></i>
                        </a>
                        <a className="link-container" href="https://github.com/jessieboudreau" target="_blank" rel="noopener noreferrer">
                            <i class="fa fa-github"></i>
                        </a>
                    <a className="link-container" target="_blank" rel="noopener noreferrer" href={resume}>
                        <i class="fa fa-file-text"></i>
                    </a>
                </div>
                <div className="column made-with-container">
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
