import React, { Component } from 'react'
import './Projects.css';
import ProjectLink from '../ProjectLink/ProjectLink';

import batterydesignThumbnail from './../../img/project/batterydesign-thumbnail.png'
import bmstestingboardThumbnail from './../../img/project/cellboardtester-thumbnail.png'
import wireharnessThumbnail from './../../img/WiringHarness/original.png';
import assemblyThumbnail from './../../img/project/accumulator-thumbnail.png';

import temp from './../../img/project/aerodynamic-thumbnail.png';


// const Project = ({ 
//     id, 
//     info, 
//     handleRecent 
//   }) => (
//     <li
//       className={info.type}
//       onClick={() => handleRecent(id)}>
//       {info.project}
//     </li>
//   )

// /* ######################### */
// /* #### Recent projects #### */
// /* ######################### */

// const RecentList = ({
//     recents,
//     data,
//     deleteRecent
//   }) => {
//     const hasRecents = (recents.length > 0)
//     const recList = recents.map((rec, i) => {
//       return (
//         <Project 
//           id={i}
//           key={i}
//           info={data[rec]}
//           handleRecent={(id) => deleteRecent(id)}
//         />
//       )
//     })
//     return (
//       <div className="recents">
//         <h4>
//           {hasRecents 
//             ? 'Recently viewed projects'
//             : ''
//           }
//         </h4>
//         <ul>
//           {recList}
//         </ul>
//         {hasRecents && <hr/>}
//       </div>
//     )
//   }

// /* ########################### */
// /* ###### Project list ####### */
// /* ########################### */

// const ProjectList = ({ 
//     data, 
//     filter,
//     recents,
//     addRecent
// }) => { 
//   const input = filter.toLowerCase()
  
//   // Gather list of project names
//   const names = data
//     // filtering out the projects that...
//     .filter((project, i) => {
//       return (
//         // ...have recently been viewed
//         recents.indexOf(project.id) === -1
//         // ...are not matching the current search value
//         && !project.name.toLowerCase().indexOf(input)
//       )
//     })
//     // ...output a <Project /> component for each name
//     .map((project, i) => {
//     // only display projects that match current input string
//       return (
//         <Project 
//           id={project.id}
//           key={i}
//           info={project}
//           handleRecent={(id) => addRecent(id)}
//         />
//       )
//     })
  
//   /* ##### the component's output ##### */
//   return ( 
//     <ul> 
//       {projects}
//     </ul>
//   )
// }

// /* ###################### */
// /* ##### Search bar ##### */
// /* ###################### */

// // need a component class here
// // since we are using `refs`
// class Search extends Component {
//   render() {
//     const { filterVal, filterUpdate} = this.props
//     return (
//       <form>
//         <input 
//           type='text'
//           ref='filterInput'
//           placeholder='Type to filter...'
//           // binding the input value to state
//           value={filterVal}
//           onChange={() => {
//            filterUpdate(this.refs.filterInput.value) 
//           }}
//         /> 
//       </form>
//     )
//   }
// }

// /* ############################## */
// /* ##### Main app component ##### */
// /* ############################## */

// class ProjectApp extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       filterText: '',
//       recents: []
//     }
//   }
  
//     // update filterText in state when user types 
//     filterUpdate(value) {
//     this.setState({
//         filterText: value
//     });
//     }

//     // add clicked name ID to the recently viewed array
//     addRecent(id) {
//         const newSet = this.state.recents.concat([id])
//         this.setState({
//             recents: newSet
//         })
//         }
        
//         // remove ID from the recently viewed array
//         deleteRecent(id) {
//         const { recents } = this.state
//         const newList = [
//             ...recents.slice(0, id),
//             ...recents.slice(id + 1)
//             ]
//         this.setState({
//             recents: newList
//         })
//         }
  
//   render() {
//     const hasSearch = this.state.filterText.length > 0
//     return ( 
//         <div>
//             <header>
//             <Search
//                 filterVal={this.state.filterText}
//                 filterUpdate={this.filterUpdate.bind(this)}
//             /> 
//             </header>
//             <main>

//                 <RecentList 
//                     data={this.props.data} 
//                     favourites={this.state.recents}
//                     deleteRecent={this.deleteRecent.bind(this)}
//                 />

//                 />

//                 <ProjectList 
//                 project={project}
//                 data={this.props.data}
//                 filter={this.state.filterText}
//                 recents={this.state.recents}
//                 addRecent={this.addRecent.bind(this)}
//                 />

//                 // Show only if user has typed in search.
//                 // To reset the input field, we pass an 
//                 // empty value to the filterUpdate method

//                 {hasSearch &&
//                     <button
//                     onClick={this.filterUpdate.bind(this, '')}>
//                     Clear Search
//                     </button>
//                 }
//             </main>
//         </div>
//     )
//   }
// }

export class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {
            projects:[
                {
                    id: 0,
                    name:"Battery Design",
                    type:"modelling",
                    link:"/battery-design",
                    thumbnail:batterydesignThumbnail},
                {
                    id: 1,
                    name:"Wiring Harness",
                    type:"modelling",
                    link:"/wiringharness",
                    thumbnail:wireharnessThumbnail},
                {
                    id: 2,
                    name:"PCB Development",
                    type:"modelling",
                    link:"/pcb-development",
                    thumbnail:bmstestingboardThumbnail},
                {
                    id: 3,
                    name:"Assembly Animaitons",
                    type:"modelling",
                    link:"/assembly-animations",
                    thumbnail:assemblyThumbnail},              
            ]
        }
    }
    render() {
        return (
            <div className="projects-container">
                {this.state.projects.map(project => (
                    <div className="projects-project-link-container">
                        <ProjectLink
                        project={project}
                        />
                    </div>))}
                    <div className="projects-project-link-container"></div>
                    <div className="projects-project-link-container"></div>
            </div>
        )
    }
}

export default Projects