import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TreeNav from '../TreeNav/TreeNav'
import Resume from './../../docs/jessie-boudreau-cv.pdf'
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
    maxWidth: '38vw',
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

    <div>
      <footer className="fixed_footer">

        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid container spacing={2} justify="center" style={{maxWidth: '85vw', margin: 'auto'}}>

              <Grid item>
                <div className={classes.paper}>
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
                </div>
              </Grid>

              <Grid item>
                <div className={classes.paper}>
                  <h5 className="title">Site Map</h5>
                  <hr size="6" width="100%" align="left" color="white"></hr>
                  <div className="site-map">
                    <TreeNav/>
                  </div>
                </div>
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
      </footer>
    </div>
  );
}
