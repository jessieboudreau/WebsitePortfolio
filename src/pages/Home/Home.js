import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ProfileBox from '../../components/ProfileBox/ProfileBox';
import AboutMe from '../../components/AboutMe/AboutMe';
import ProjectTiles from '../../components/ProjectTiles/ProjectTiles';
import DocList from '../../components/ExpansionList/ExpansionList';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Email from './../../components/Email/Email'
import 'react-web-tabs/dist/react-web-tabs.css';
import './Home.css'; 

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    height: 'auto',
    width: '84vw',
  },
  grid: {
    margin: theme.spacing(2),
  }
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div  className={classes.root}>
        {/* Profile box view */}
        <ProfileBox/>

        {/* About me view */}
        <AboutMe/>

        {/* Tab View section */}
        <Grid
          container
          justify="center"
          alignItems="center"
          >
          <Paper className={classes.paper}
          >
            <AppBar
              style={{ 
                marginTop: 15,
                marginRight: 15,
                marginLeft: 15,
                minHeight: 55,
                width: 'auto',
                textDecorationColor: "#222",
                }} 
              position="sticky"
              color="default"
              >
                <Tabs
                  value={value}
                  style={{ minHeight: 56 }}
                  onChange={handleChange}
                  // indicatorColor="grey800"
                  inkBarStyle={{ color: "#202020" }}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                  >
                <Tab style={{ minHeight: 55 }} label="Projects" icon={<WorkOutlineOutlinedIcon />} {...a11yProps(0)} />
                <Tab style={{ minHeight: 55 }} label="Documents" icon={<InsertDriveFileOutlinedIcon />} {...a11yProps(1)} />
                {/* <Tab style={{ minHeight: 55 }} label="Blog" icon={<ChatBubbleOutlineIcon />} {...a11yProps(1)} /> */}
                {window.innerWidth > 900 
                  ?
                  <Tab style={{ minHeight: 55 }} label="Contact" icon={<MailOutlineIcon/>} {...a11yProps(1)} />
                  :
                  <div></div>
                }
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reversible' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
                >
              <Paper
                className={classes.paper}
              >
                <TabPanel 
                  value={value} 
                  index={0}
                >
                    <ProjectTiles/>
                </TabPanel>
              </Paper>

              <Paper
                className={classes.paper}
              >
                <TabPanel 
                  value={value} 
                  index={1}
                >
                    <DocList/>
                </TabPanel>
              </Paper>

              <Paper
                className={classes.paper}
              >
                {window.innerWidth > 900 
                  ?
                  <TabPanel 
                    value={value} 
                    index={2}
                  >
                      <Email/>
                  </TabPanel>
                  :
                  <div></div>
                }
              </Paper>
            </SwipeableViews>
          </Paper>
        </Grid>
    </div>
  );
}
