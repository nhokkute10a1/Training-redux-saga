import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as CoreUI from '@material-ui/core';
import * as CoreIcon from '@material-ui/icons';
import { bindActionCreators } from 'redux';
import { STATUS } from '../../constants/constanst';
import styles from './Taskboard.styles';
import TaskList from '../../components/TaskList/TaskList';
import TaskForm from '../../components/TaskForm/TaskForm';
import * as taskActions from '../../actions/taskAction';

function Taskboard(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false);
  const { listTask } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderForm = () => {
    return <TaskForm open={open} handleClose={handleClose} />;
  };

  useEffect(() => {
    const { taskActionCreator } = props;
    const { fetchListTaskRequest } = taskActionCreator;
    fetchListTaskRequest();
  }, []);

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

Taskboard.propTypes = {
  classes: PropTypes.object,
  taskActionCreator: PropTypes.shape({
    fechListTask: PropTypes.func,
  }),
  listTask: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    listTask: state.task.listTask,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    taskActionCreator: bindActionCreators(taskActions, dispatch),
  };
};

export default CoreUI.withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Taskboard),
);
