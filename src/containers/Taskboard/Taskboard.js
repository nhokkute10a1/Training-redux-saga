import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as CoreUI from '@material-ui/core';
import * as CoreIcon from '@material-ui/icons';
import STATUS from '../../constants/constanst';
import styles from './Taskboard.styles';
import TaskList from '../../components/TaskList/TaskList';
import TaskForm from '../../components/TaskForm/TaskForm';

const listTask = [
  {
    id: 1,
    title: 'Implement Task UI',
    description:
      'Any other props supplied will be provided to the root element (native element).',
    status: 0,
  },
  {
    id: 2,
    title: 'Maping API UI',
    description:
      'Any other props supplied will be provided to the root element (native element).',
    status: 1,
  },
  {
    id: 3,
    title: 'Sefl-test UI',
    description:
      'The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.',
    status: 2,
  },
];

function Taskboard(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderForm = () => {
    return <TaskForm open={open} handleClose={handleClose} />;
  };

  return (
    <div className={classes.root}>
      <CoreUI.AppBar position="static">
        <CoreUI.Toolbar variant="dense">
          <CoreUI.IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <CoreIcon.Menu />
          </CoreUI.IconButton>
          <CoreUI.Typography variant="h6" color="inherit">
            Photos
          </CoreUI.Typography>
        </CoreUI.Toolbar>
      </CoreUI.AppBar>
      <CoreUI.Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Add New Task
      </CoreUI.Button>
      <CoreUI.Grid container spacing={1}>
        {STATUS.map(status => {
          const taskFiltered = listTask.filter(task => {
            return task.status === status.value;
          });
          return (
            <TaskList
              taskFiltered={taskFiltered}
              status={status}
              key={status.value}
            />
          );
        })}
      </CoreUI.Grid>
      {/* Dialog Modal */}
      {renderForm()}
    </div>
  );
}

// Taskboard.propTypes = {
//   classes: PropTypes.object,
// };

export default CoreUI.withStyles(styles)(Taskboard);
