import { combineReducers } from 'redux';
import taskReducers from './taskReducers';
import uiReducers from './uiReducers';

const rootReducers = combineReducers({
  task: taskReducers,
  ui: uiReducers,
});

export default rootReducers;
