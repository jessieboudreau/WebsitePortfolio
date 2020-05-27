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
// import letterChi from './../../docs/Chi_Tang_Recommendation_Letter.pdf'

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
  },
  {
    id: '2',
    title: 'Letter of Recommedation - Phillip Kollmeyer, Ph.D',
    description: "A letter of recommendation from my research supervisor at the McMaster Automotive Resource Centre",
    avatar: "",
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '05/27/2020',
    link: letterPhil,
  },
  // {
  //   id: '3',
  //   title: 'Letter of Recommedation - Dr. Chi Tang',
  //   description: "A letter of recommendation from the Power & Energy Engineering Program Chair at McMaster University",
  //   avatar: "",
  //   type: 'PDF',
  //   icon: 'fas fa-lock',
  //   date: '05/27/2020',
  //   link: letterChi,
  // },
  {
    id: '4',
    title: 'Safe Handling of HV Battery Systems | SAE',
    description: "This training introduces participants to the risks encountered in handling high voltage battery systems and their component parts. With the understanding of these risks, the seminar will then address how to raise risk awareness and then methods of dealing with those risks. The outcome of this seminar should be improved avoidance of personal injury, reduced risk of reputation loss and product liability actions and reduced risk of loss of property and time. Students will have an opportunity to participate in a real world battery handling case study scenario in which they will identify solutions for potential risk situations.",
    avatar: "",
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '11/13/2018',
    link: saeBatteryTraining,
  },
  {
    id: '5',
    title: 'First Aid Certification | Red Cross',
    avatar: "",
    description: "",
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '09/08/2018',
    link: firstAid,
  },
  {
    id: '6',
    title: 'Honours with Distinction | Conestoga',
    avatar: "",
    description: "",
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '05/05/2017',
    link: honoursDistinctionConestoga,
  },
  {
    id: '7',
    title: 'Proof of Program Completion | Conestoga',
    avatar: "",
    description: "",
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '05/17/2017',
    link: proofOfCompletionConestoga,
  },
  {
    id: '8',
    title: 'Best Capstone Project Award | Conestoga',
    avatar: "",
    description: "",
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '05/02/2017',
    link: esetBestProject,
  },
  {
    id: '9',
    title: "Dean's Honour List | Conestoga",
    avatar: "",
    description: "",
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '05/05/2014',
    link: honourList,
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
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
  details: {
    alignItems: 'start',
  },
  column: {
    flexBasis: '33.33%',
  },
  expandedColumn: {
    flexBasis: '15%',
  },
  description: {
    flexBasis: '70%',
    padding: theme.typography.pxToRem(20),
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    borderRight: `2px solid ${theme.palette.divider}`,
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

  return (

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
          <div className={classes.column}>
            {/* <Typography className={classes.heading}>Type</Typography> */}
          </div>
          <div className={classes.column}>
            <Typography className={classes.heading}>Date Issued</Typography>
          </div>
        </ExpansionPanelSummary>
      </ExpansionPanel>

      {/* Document Rows */}
      {docs.map(item => (                         
        <ExpansionPanel>
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
            <div className={classes.column}>
              {/* <Typography className={classes.secondaryHeading}>{item.type}</Typography> */}
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>{item.date}</Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.expandedColumn}>
              
            </div>
            {window.innerWidth < 800 ? <div /> : 
              <Typography className={classes.description} align="justify">
                {item.description}
              </Typography>
            }
            <div className={clsx(classes.expandedColumn, classes.helper)}>
              <Typography variant="caption" align="start">
                Questions?
                <br />
                <a href={"mailto:jessie.boudreau@live.ca?subject=Inquiry about your " + "'" + item.title + "'"} target="_blank" className={classes.link}>
                  Contact me!
                </a>
              </Typography>
            </div>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button href={item.link} target="_blank" size="small">Open</Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      ))} 
    </div>
  );
}

