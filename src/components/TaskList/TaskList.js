import React from 'react';
import * as CoreUI from '@material-ui/core';
import styles from './TaskList.styles';
import TaskItem from '../TaskItem/TaskItem';

function TaskList(props) {
  const { classes, status, taskFiltered } = props;

  return (
    <CoreUI.Grid item xs={12} sm={4} key={status.value}>
      <CoreUI.Box mt={1} mb={1}>
        <div>{status.label}</div>
      </CoreUI.Box>

      <div>
        {taskFiltered.map(task => {
          return <TaskItem task={task} status={status} key={task.id} />;
        })}
      </div>
    </CoreUI.Grid>
  );
}
export default CoreUI.withStyles(styles)(TaskList);
