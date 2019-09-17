import * as types from '../constants/uiConstants';

const intialState = {
  showLoading: false,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case types.SHOW_LOADING: {
      return {
        ...state,
        showLoading: true,
      };
    }
    case types.HIDEN_LOADING: {
      return {
        ...state,
        showLoading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
