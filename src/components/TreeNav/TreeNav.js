import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Resume from './../../docs/jessie-boudreau-resume.pdf';

const useStyles = makeStyles({
  root: {
    height: 218,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function ControlledTreeView() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
    >
      <a href="/">
        <TreeItem nodeId="1" label="Home" />
      </a>
      <TreeItem nodeId="2" label="Projects">
        <a href="/projects/conestoga-college/atmospheric-water-generator">
          <TreeItem nodeId="3" label="Atmospheric Water Generator" />
        </a>
        <a href="/projects/mac-formula-electric/cell-board-tester">
          <TreeItem nodeId="4" label="Battery Cell Board Tester" />
        </a>
        {/* <a href="/projects/mac-formula-electric/battery-cycler">
          <TreeItem nodeId="5" label="Battery Cycler" />
        </a> */}
        {/* <a href="/projects/mcmaster-university/battery-design">
          <TreeItem nodeId="6" label="Capstone Battery Design" />
        </a>
        <a href="/projects/mac-formula-electric/charging-cart">
          <TreeItem nodeId="7" label="Charging Cart" />
        </a> */}
        {/* <a href="/projects/mac-formula-electric/ev-charger">
          <TreeItem nodeId="8" label="Electric Vehicle Charger" />
        </a> */}
        {/* <a href="/projects/mac-formula-electric/inverter-mcu-enclosure">
          <TreeItem nodeId="9" label="Inverter & MCU Enclosure" />
        </a> */}
        <a href="/projects/mac-formula-electric/ev-battery">
          <TreeItem nodeId="10" label="Electric Accumulator" />
        </a>
      </TreeItem>
      <TreeItem nodeId="11" label="Documents">
        <a href={Resume} target="_blank">
          <TreeItem nodeId="12" label="Resume" />
        </a>
      </TreeItem>
    </TreeView>
  );
}
