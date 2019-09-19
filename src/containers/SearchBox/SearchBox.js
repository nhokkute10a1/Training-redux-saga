import React from 'react';
import PropTypes from 'prop-types';
import * as CoreUI from '@material-ui/core';
import styles from './SearchBox.style';

function SearchBox(props) {
  const { classes, handleChange } = props;
  return (
    <div>
      <CoreUI.TextField
        id="outlined-email-input"
        label="Search"
        className={classes.textField}
        type="search"
        name="search"
        autoComplete="search"
        margin="normal"
        variant="outlined"
        onChange={handleChange}
      />
    </div>
  );
}

SearchBox.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func,
};

export default CoreUI.withStyles(styles)(SearchBox);
