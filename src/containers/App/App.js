import React from 'react';
import * as CoreUI from '@material-ui/styles';
import styles from './App.styles';
import Taskboard from '../Taskboard/Taskboard';
import theme from '../../common/Theme/theme.styles';

function App(props) {
  return (
    <CoreUI.ThemeProvider theme={theme}>
      <Taskboard />
    </CoreUI.ThemeProvider>
  );
}

export default CoreUI.withStyles(styles)(App);
