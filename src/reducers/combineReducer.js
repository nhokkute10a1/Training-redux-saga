import { combineReducers } from 'redux';
import taskReducers from './taskReducers';

const rootReducers = combineReducers({
  task: taskReducers,
});

export default rootReducers;
