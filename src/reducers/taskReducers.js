import * as taskConstants from '../constants/taskConstants';
import * as toastMessages from '../common/toastMessage';

const initialState = {
  listTask: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK:
      return { ...state, listTask: [] };
    case taskConstants.FETCH_TASK_SUCCESS: {
      const { data } = action.payload;
      return { ...state, listTask: data };
    }
    case taskConstants.FETCH_TASK_FAIL: {
      const { error } = action.payload;
      toastMessages.Error(error);
      return { ...state, listTask: [] };
    }
    default:
      return state;
  }
};

export default reducers;
