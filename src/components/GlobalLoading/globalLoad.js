import React, { Component } from 'react';
import * as CoreUI from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import iconLoad from '../../assets/images/loading.gif';
import styles from './globalLoad.style';
import * as uiAction from '../../actions/uiAction';

function GlobalLoading(props) {
  const { classes, showLoading } = props;
  let xtml = null;
  if (showLoading) {
    xtml = (
      <div className={classes.globalLoading}>
        <img src={iconLoad} alt="loading" className={classes.icon} />
      </div>
    );
  }
  return xtml;
}

GlobalLoading.propTypes = {
  classes: PropTypes.object,
  // eslint-disable-next-line react/no-unused-prop-types
  showLoading: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    showLoading: state.ui.showLoading,
  };
};

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(
  CoreUI.withStyles(styles),
  withConnect,
)(GlobalLoading);
