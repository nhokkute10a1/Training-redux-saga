import React from 'react';
import * as CoreUI from '@material-ui/core';
import styles from './TaskItem.styles';

function TaskItem(props) {
  const { classes, task, status } = props;
  return (
    <CoreUI.Card key={task.id} className={classes.card}>
      <CoreUI.CardContent className={classes.cardContent}>
        <CoreUI.Grid container justify="space-between">
          <CoreUI.Grid item md={8}>
            <CoreUI.Typography component="h2">{task.title}</CoreUI.Typography>
          </CoreUI.Grid>
          <CoreUI.Grid item md={4}>
            {status.label}
          </CoreUI.Grid>
        </CoreUI.Grid>
        <p>{task.description}</p>
      </CoreUI.CardContent>
      <CoreUI.CardActions className={classes.cardAction}>
        <CoreUI.Fab
          color="secondary"
          aria-label="edit"
          className={classes.fab}
          size="small"
        >
          <CoreUI.Icon fontSize="small">edit_icon</CoreUI.Icon>
        </CoreUI.Fab>
        <CoreUI.Fab
          color="primary"
          aria-label="add"
          className={classes.fab}
          size="small"
        >
          <CoreUI.Icon fontSize="small">delete_icon</CoreUI.Icon>
        </CoreUI.Fab>
      </CoreUI.CardActions>
    </CoreUI.Card>
  );
}
export default CoreUI.withStyles(styles)(TaskItem);
