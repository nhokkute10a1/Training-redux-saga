import React, { useState } from 'react';
import * as CoreUI from '@material-ui/core';
import styles from './TaskForm.styles';

function TaskForm(props) {
  const { classes, open, handleClose } = props;
  const [fullWidth] = useState(true);

  return (
    <CoreUI.Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth={fullWidth}
    >
      <CoreUI.DialogTitle id="form-dialog-title">
        Add New Task
      </CoreUI.DialogTitle>
      <CoreUI.DialogContent>
        <CoreUI.TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          className={classes.textField}
          margin="normal"
          variant="filled"
          fullWidth={fullWidth}
        />
      </CoreUI.DialogContent>
      <CoreUI.DialogActions>
        <CoreUI.Button onClick={handleClose} color="primary">
          Cancel
        </CoreUI.Button>
        <CoreUI.Button onClick={handleClose} color="primary">
          Ok
        </CoreUI.Button>
      </CoreUI.DialogActions>
    </CoreUI.Dialog>
  );
}
export default CoreUI.withStyles(styles)(TaskForm);
