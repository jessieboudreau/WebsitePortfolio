import React, { Component } from 'react'
import ProfileBox from '../ProfileBox/ProfileBox';



import './ProjectPage.css';
import Projects from './../../components/Projects/Projects.js'


export class ProjectPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            showcase:this.props.images[0],
            images:this.props.images,
            intervalId: 0
        }}
    

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    updateShowcase = (newImage) =>{
        this.setState({showcase:newImage})
    }
        
        scrollStep() {
          if (window.pageYOffset === 0) {
              clearInterval(this.state.intervalId);
          }
          window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
        }
        
        scrollToTop() {
          let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
          this.setState({ intervalId: intervalId });
        }


    render() {
        return (
            <div>
                <ProfileBox />

                {/* Scroll to top button */}
                <button title='Back to top' className='scroll' 
                     onClick={ () => { this.scrollToTop(); }}>
                      <span className='arrow-up fa fa-arrow-up'></span>
                </button>

                <div className="project-header-container">
                    <h1 className="project-header">
                        {this.props.title}
                    </h1>
                </div>
                <div className="showcase-container">
                    <img src={this.state.showcase.image} className="showcase-image"/>
                    <p className="showcase-description">{this.state.showcase.description}</p>
                </div>
                <div className="showcase-image-selector-container">
                    {this.state.images.map(img => (
                        <div className="showcase-image-selector-image-container" onClick={this.updateShowcase.bind(this,img)}>
                            <img src={img.image} className="showcase-image-selector-image"/>
                        </div>
                    ))}
                </div>
                <div className="project-description-container">
                    {this.props.contents}              
                </div>
            </div>
        )
    }
}

export default ProjectPage
