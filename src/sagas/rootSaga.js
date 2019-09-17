import { fork, take, call, put, delay } from 'redux-saga/effects';
import * as taskTypes from '../constants/taskConstants';
import * as taskApis from '../apis/taskApis';
import { STATUS_CODE } from '../constants/constanst';
import * as taskActions from '../actions/taskAction';
import * as uiAction from '../actions/uiAction';

function* rootSagas() {
  yield fork(watchFetchTaskAction);
  // yield fork(watchCreateTaskAction);
}

function* watchFetchTaskAction() {
  yield take(taskTypes.FETCH_TASK);
  yield put(uiAction.showLoading());
  // ====Block====
  const res = yield call(taskApis.getList);
  // ====Block====
  const { status, data } = res;
  if (status === STATUS_CODE.SUSSCESS) {
    // dispatch action FetchListTaskSuccess
    yield put(taskActions.fetchListTaskSuccess(data));
  } else {
    // dispatch action FetchListTaskFail
    yield put(taskActions.fetchListTaskError(data));
  }
  yield delay(1000);
  yield put(uiAction.hidenLoading());
}

// function* watchCreateTaskAction() {
//   console.log('watchCreateTaskAction');
// }

export default rootSagas;
