import { combineReducers } from 'redux';
import { auth } from '../auth/reducer';
import { tasks } from '../tasksList/reducer';

export default combineReducers({
  auth,
  tasks,
});
