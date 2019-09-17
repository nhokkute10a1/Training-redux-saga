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

/**
 * B1: call fetchListTaskRequest
 * B2: reset state task =  []
 * B3: dispatch action fetchListTaskSuccess (data response)
 * B4:
 */
// export const fetchListTaskRequest = () => {
//   return dispatch => {
//     dispatch(fetchListTask());
//     taskApis
//       .getList()
//       .then(res => {
//         dispatch(fetchListTaskSuccess(res.data));
//       })
//       .catch(error => {
//         dispatch(fetchListTaskError(error));
//       });
//   };
// };
