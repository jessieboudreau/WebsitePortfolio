import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { BrowserRouter as Link } from 'react-router-dom';

// Document links
import Resume from './../../docs/jessie-boudreau-cv.pdf';
import honourList from './../../docs/Achievements/Deans_Honour_List.pdf';
import esetBestProject from './../../docs/Achievements/ESET_Best_Project.pdf';
import honoursDistinctionConestoga from './../../docs/Achievements/Honours_w_Distinction.pdf';
import proofOfCompletionConestoga from './../../docs/Achievements/Proof_of_Program_Completion.pdf';
import saeBatteryTraining from './../../docs/Achievements/SAE_Safe_Handling_of_HV_Battery_Systems.pdf';
import firstAid from './../../docs/Achievements/Standard_First_Aid_CPR-AED_Level_HCP.pdf';
import letterPhil from './../../docs/Phil_Kollmeyer_Recommendation_Letter.pdf'
import letterChi from './../../docs/Chi_Tang_Recommendation_Letter.pdf'
import degreeConferred from './../../docs/Achievements/Degree_Confer_Letter.pdf'

// Doc Images
import Resume1 from './../../img/doc-previews/resume-page-1.png'
import Resume2 from './../../img/doc-previews/resume-page-2.png'
import PhilLetter from './../../img/doc-previews/phil-letter.png'
import ChiLetter from './../../img/doc-previews/chi-letter.png'
import DegreeConferred from './../../img/doc-previews/degree-conferred.png'
import SAEBatteryCertification from './../../img/doc-previews/sae-battery-certificate.png'
import FirstAid from './../../img/doc-previews/first-aid.png'
import HonoursDistinction from './../../img/doc-previews/honours-distinction.png'
import ConestogaProof from './../../img/doc-previews/conestoga-proof.png'
import BestCapstone from './../../img/doc-previews/best-capstone.png'
import HonourList from './../../img/doc-previews/honour-list.png'

import './ExpansionList.css';

export const docs = [
  {
    id: '1',
    title: 'Resume',
    description: "My complete CV inclduing contact information, overview and professional experience.",
    avatar: "",
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '05/27/2020',
    link: Resume,
    preview: [ {page: Resume1}, {page: Resume2} ]
  },
  {
    id: '2',
    title: 'Letter of Recommedation - Phillip Kollmeyer, Ph.D',
    description: "A letter of recommendation from my research supervisor at the McMaster Automotive Resource Centre",
    avatar: "",
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '06/2/2020',
    link: letterPhil,
    preview: [ {page: PhilLetter} ]
  },
  {
    id: '3',
    title: 'Letter of Recommedation - Dr. Chi Tang',
    description: "A letter of recommendation from the Power & Energy Engineering Program Chair at McMaster University",
    avatar: "",
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '06/1/2020',
    link: letterChi,
    preview: [ {page: ChiLetter} ]
  },
  {
    id: '4',
    title: 'Degree Conferred Confirmation',
    description: "This letter confirms Bachelor of Technology (B.Tech) degree and date awarded.",
    avatar: "",
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '06/12/2020',
    link: degreeConferred,
    preview: [ {page: DegreeConferred} ]
  },
  {
    id: '5',
    title: 'Safe Handling of HV Battery Systems | SAE',
    description: "This training introduces participants to the risks encountered in handling high voltage battery systems and their component parts. With the understanding of these risks, the seminar will then address how to raise risk awareness and then methods of dealing with those risks. The outcome of this seminar should be improved avoidance of personal injury, reduced risk of reputation loss and product liability actions and reduced risk of loss of property and time.",
    avatar: "",
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '11/13/2018',
    link: saeBatteryTraining,
    preview: [ {page: SAEBatteryCertification} ]
  },
  {
    id: '6',
    title: 'First Aid Certification | Red Cross',
    avatar: "",
    description: "Canadian Red Cross - Standar First Aid & CPR/AED Level HCP",
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '09/08/2018',
    link: firstAid,
    preview: [ {page: FirstAid} ]
  },
  {
    id: '7',
    title: 'Honours with Distinction | Conestoga',
    avatar: "",
    description: "Letter from Conestoga College confirming 'Graduation with Distinction'",
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '05/05/2017',
    link: honoursDistinctionConestoga,
    preview: [ {page: HonoursDistinction} ]
  },
  {
    id: '8',
    title: 'Proof of Program Completion | Conestoga',
    avatar: "",
    description: "Letter from Conestoga College confirming 'Energy Engineering Technology' program completion",
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '05/17/2017',
    link: proofOfCompletionConestoga,
    preview: [ {page: ConestogaProof} ]
  },
  {
    id: '9',
    title: 'Best Capstone Project Award | Conestoga',
    avatar: "",
    description: "'Best Final Year Project' in the Energy Engineering Technology program award certificate",
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '05/02/2017',
    link: esetBestProject,
    preview: [ {page: BestCapstone} ]
  },
  {
    id: '10',
    title: "Dean's Honour List | Conestoga",
    avatar: "",
    description: "Letter from Conestoga College confirming achievemnt of 'Dean's Honour List'",
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '05/05/2014',
    link: honourList,
    preview: [ {page: HonourList} ]
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: 45,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  preview: {
    height: '8em',
    width: 'auto',
    boxShadow: '0 0 10px #777',
    margin: theme.typography.pxToRem(5),
  },
  details: {
    alignItems: 'start',
  },
  column: {
    flexBasis: '100%',
  },
  expandedColumn: {
    flexBasis: 'auto',
    paddingRight: theme.typography.pxToRem(15),
    borderRight: `2px solid ${theme.palette.divider}`,
  },
  mobileExpaded: {
    flexBasis: 'auto',
  },
  description: {
    flexBasis: '70%',
    height: '90%',
    paddingLeft: theme.typography.pxToRem(20),
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  helper: {
    padding: theme.typography.pxToRem(20),
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));


export default function DetailedExpansionPanel() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    expandAll: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (

    <div>

    <div className="tab-paragraph-container">
        <h1 className="tab-title">Documents & Certifications</h1>
        {/* <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="expandAll"
            control={<Switch name="expandAll" color="secondary" checked={state.expandAll} onChange={handleChange}/>}
            label="Expand All"
            labelPlacement="start"
          />
        </FormGroup>
      </FormControl> */}
    </div>

    <div className={classes.root}>

      {/* Header Row */}
        <ExpansionPanel disabled={true}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Title</Typography>
          </div>
          {window.innerWidth < 500 ? <div/> :
          <div className={classes.column}>
            <Typography className={classes.heading}>Date Issued</Typography>
          </div>
          }
        </ExpansionPanelSummary>
      </ExpansionPanel>

      {/* Document Rows */}
      {docs.map(item => (                         
        <ExpansionPanel 
          // expanded={state.expandAll}
          >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
            id="panel1c-header"
          >
            <div className={classes.column}>
              <Typography className={classes.heading}>
                {item.title}
              </Typography>
            </div>
            {window.innerWidth < 500 ? <div/> :
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>{item.date}</Typography>
            </div>
            }
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            {window.innerWidth < 500
            ?
            <Typography className={classes.mobileExpanded} align="justify">
              {item.preview.map(prev => (
                <img src={prev.page} className={classes.preview} />
              ))}
            </Typography>
            :
            <Typography className={classes.expandedColumn} align="justify">
              {item.preview.map(prev => (
                <img src={prev.page} className={classes.preview} />
              ))}
            </Typography>
          }
            {window.innerWidth < 800 ? <div /> : 
              <Typography className={classes.description} align="justify">
                  <div className={classes.subTitle}>Description: </div>
                  {item.description}
              </Typography>
            }
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button href={item.link} target="_blank" size="small">Open</Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      ))} 
    </div>
    </div>
  );
}

