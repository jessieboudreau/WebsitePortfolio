import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProfileBox from '../../components/ProfileBox/ProfileBox';
import AboutMe from '../../components/AboutMe/AboutMe';
import ProjectTiles from '../../components/ProjectTiles/ProjectTiles';
import DocList from '../../components/ExpansionList/ExpansionList';
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
    <div className={classes.root}>
        {/* Profile box view */}
        <ProfileBox/>

        {/* About me view */}
        <AboutMe/>

        {/* Tab View section */}
        <div className="tabs-container">
          <Box
            boxShadow={2}
            bgcolor="background.primary"
            > 
            <AppBar
              boxShadow={0} 
              style={{ 
                minHeight: 55, 
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
                  inkBarStyle={{ backgroud: "grey400" }}
                  textColor="grey400"
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                  >
                <Tab style={{ minHeight: 55 }} label="Projects" {...a11yProps(0)} />
                <Tab style={{ minHeight: 55 }} label="Documents" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
                >
              <Box
                overflow="hidden"
              >
                <TabPanel 
                  value={value} 
                  index={0}
                >
                    <ProjectTiles/>
                </TabPanel>
              </Box>

              <Box
                overflow="hidden"
              >
                <TabPanel 
                  value={value} 
                  index={1}
                >
                    <DocList/>
                </TabPanel>
              </Box>
            </SwipeableViews>
          </Box>
        </div>
    </div>
  );
}
