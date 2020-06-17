import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { docs } from './../../components/ExpansionList/ExpansionList';
import { projects } from './../../components/ProjectTiles/Projects'

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
      {projects.map(item => ( 
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <TreeItem nodeId={item.id} label={item.name} />
          </a>
        ))}
      </TreeItem>
        <TreeItem nodeId="3" label="Documents">
        {docs.map(item => ( 
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <TreeItem nodeId={item.id} label={item.title} />
          </a>
        ))}
        </TreeItem>
    </TreeView>
  );
}
