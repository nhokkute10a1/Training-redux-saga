import * as uiTypes from '../constants/uiConstants';

export const showLoading = () => {
  return {
    type: uiTypes.SHOW_LOADING,
  };
};

export const hidenLoading = () => {
  return {
    type: uiTypes.HIDEN_LOADING,
  };
};
