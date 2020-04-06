import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Resume from './../../docs/jessie-boudreau-resume.pdf';

import './ExpansionList.css';


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
            <Typography className={classes.heading}>Date Added</Typography>
          </div>
        </ExpansionPanelSummary>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Resume</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>PDF</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>03/20/2020</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column}>
            {/* <Chip clickable={true} variant="outlined" label="Capstone Battery Design" /> */}
            {/* <Chip label="Barbados" onDelete={() => {}} /> */}
          </div>
          <div className={classes.column} />
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Questions?
              <br />
              <a href="mailto:jessie.boudreau@live.ca?subject=Inquiry about your resume" target="_blank" className={classes.link}>
                Contact me!
              </a>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button href={Resume} target="_blank" size="small">View</Button>
          <Button href={Resume} download="jessie-boudreau-resume" size="small" color="primary">
            Download
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}

