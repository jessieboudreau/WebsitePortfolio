import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TreeNav from '../TreeNav/TreeNav'
import Resume from './../../docs/jessie-boudreau-resume.pdf'
import Button from '@material-ui/core/Button';
import './Footer.css';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
    // maxWidth: '85vw',
    flexGrow: 1,
  },
  paper: {
    minHeight: 340,
    width: 290,
    maxWidth: '85vw',
    padding: theme.spacing(2),
  },
  signature: {
    padding: theme.spacing(2),
  },
  button: {
    height: 55,
  }
}));

export default function FooterPage() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container spacing={2} justify="center" style={{maxWidth: '85vw', margin: 'auto'}}>

          <Grid item>
            <Paper className={classes.paper}>
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
            </Paper>
          </Grid>
          
          <Grid item>
            <Paper className={classes.paper}>
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
            </Paper>
          </Grid>

          <Grid item>
            <Paper className={classes.paper}>
              <h5 className="title">Connect</h5>
              <hr size="6" width="100%" align="left" color="white"></hr>
              <ul className="btn-container">
                <Button className={classes.button} href="https://www.linkedin.com/in/jessie-boudreau-46203ba5/" target="_blank" rel="noopener noreferrer">
                  {/* <i class="fab fa-linkedin"></i>  */}
                  LinkedIn
                </Button>
                <Button className={classes.button} href="https://github.com/jessieboudreau" target="_blank" rel="noopener noreferrer">
                  {/* <i class="fab fa-github"></i>  */}
                  GitHub
                </Button>
                <Button className={classes.button} href={Resume} target="_blank" rel="noopener noreferrer">
                  {/* <i class="far fa-file"></i>  */}
                  Resume
                </Button>
                <Button className={classes.button} href="mailto:jessie.boudreau@live.ca" target="_blank" rel="noopener noreferrer">
                  {/* <i class="far fa-envelope"></i>  */}
                  Email
                </Button>
              </ul>
            </Paper>
          </Grid>

          <Grid item>
            <Paper className={classes.paper}>
              <h5 className="title">Site Map</h5>
              <hr size="6" width="100%" align="left" color="white"></hr>
              <div className="site-map">
                <TreeNav/>
              </div>
            </Paper>
          </Grid>

        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" className={classes.signature}>
          <Grid item>
            <div className="footer-copyright text-center py-3">
              &copy; {new Date().getFullYear()} Copyright: <a href="https://www.jessieboudreau.com"> Jessie Boudreau </a>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
