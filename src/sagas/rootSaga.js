import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  select,
} from 'redux-saga/effects';
import * as taskTypes from '../constants/taskConstants';
import * as taskApis from '../apis/taskApis';
import { STATUS_CODE } from '../constants/constanst';
import * as taskActions from '../actions/taskAction';
import * as uiAction from '../actions/uiAction';

function* rootSagas() {
  yield fork(watchFetchTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskAction); // ham nang cao cua fork
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

function* filterTaskAction({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  const list = yield select(state => {
    return state.task.listTask;
  }); // lay du lieu voi select
  const filterTask = list.filter(task => {
    return task.title
      .trim()
      .toLowerCase()
      .includes(keyword.trim().toLowerCase());
  });
  yield put(taskActions.filterTaskSuccess(filterTask)); // dispatch action
}

// function* watchCreateTaskAction() {
//   console.log('watchCreateTaskAction');
// }

// TakeLatest: chi thuc thi va lay ket qa cuoi cung
// TakeEvery: goi la chay ham thuc thi ngay lap tuc
// select: lay giu lieu tu store ra
// put: dispatch action, lang nghe su kien
export default rootSagas;
