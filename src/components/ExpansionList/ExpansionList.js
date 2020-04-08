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
import Resume from './../../docs/jessie-boudreau-resume.pdf';
import honourList from './../../docs/Achievements/Deans_Honour_List.pdf';
import esetBestProject from './../../docs/Achievements/ESET_Best_Project.pdf';
import honoursDistinctionConestoga from './../../docs/Achievements/Honours_w_Distinction.pdf';
import proofOfCompletionConestoga from './../../docs/Achievements/Proof_of_Program_Completion.pdf';
import saeBatteryTraining from './../../docs/Achievements/SAE_Safe_Handling_of_HV_Battery_Systems.pdf';
import firstAid from './../../docs/Achievements/Standard_First_Aid_CPR-AED_Level_HCP.pdf';

import './ExpansionList.css';

export const docs = [
  {
    id: '1',
    title: 'Resume',
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '03/20/2020',
    link: Resume,
  },
  {
    id: '2',
    title: 'Safe Handling of HV Battery Systems | SAE',
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '11/13/2018',
    link: saeBatteryTraining,
  },
  {
    id: '3',
    title: 'First Aid Certification | Red Cross',
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '09/08/2018',
    link: firstAid,
  },
  {
    id: '4',
    title: 'Honours with Distinction | Conestoga',
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '05/05/2017',
    link: honoursDistinctionConestoga,
  },
  {
    id: '5',
    title: 'Proof of Program Completon | Conestoga',
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '05/17/2017',
    link: proofOfCompletionConestoga,
  },
  {
    id: '6',
    title: 'Best Capstone Project Award | Conestoga',
    type: 'PDF',
    icon: 'fas fa-lock',
    date: '05/02/2017',
    link: esetBestProject,
  },
  {
    id: '7',
    title: "Dean's Honour List | Conestoga",
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
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
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
            <Typography className={classes.heading}>Type</Typography>
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
              <Typography className={classes.secondaryHeading}>{item.type}</Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>{item.date}</Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column} />
            <div className={classes.column} />
            <div className={clsx(classes.column, classes.helper)}>
              <Typography variant="caption">
                Questions?
                <br />
                <a href="mailto:jessie.boudreau@live.ca?subject=Inquiry about your portfolio!" target="_blank" className={classes.link}>
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

