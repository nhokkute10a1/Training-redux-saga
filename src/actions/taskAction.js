import * as taskApis from '../apis/taskApis';
import * as taskConstanst from '../constants/taskConstants';

export const fetchListTask = () => {
  return {
    type: taskConstanst.FETCH_TASK,
  };
};

export const fetchListTaskSuccess = data => {
  return {
    type: taskConstanst.FETCH_TASK_SUCCESS,
    payload: { data },
  };
};

export const fetchListTaskError = error => {
  return {
    type: taskConstanst.FETCH_TASK_FAIL,
    payload: { error },
  };
};

export const filterTask = keyword => {
  return {
    type: taskConstanst.FILTER_TASK,
    payload: { keyword },
  };
};

export const filterTaskSuccess = data => {
  return {
    type: taskConstanst.FILTER_TASK_SUCCESS,
    payload: { data },
  };
};
