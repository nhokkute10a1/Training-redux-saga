import React from 'react';
import * as CoreUI from '@material-ui/styles';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import styles from './App.styles';
import Taskboard from '../Taskboard/Taskboard';
import theme from '../../common/Theme/theme.styles';
import configureStore from '../../redux/configureStore';
import GlobalLoading from '../../components/GlobalLoading/globalLoad';

const store = configureStore();

function App(props) {
  return (
    <Provider store={store}>
      <CoreUI.ThemeProvider theme={theme}>
        <ToastContainer />
        <GlobalLoading />
        <Taskboard />
      </CoreUI.ThemeProvider>
    </Provider>
  );
}

export default CoreUI.withStyles(styles)(App);
