/* eslint-disable prettier/prettier */
// reducers/index.js (rootReducer)

import { combineReducers } from 'redux';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  // You can add more reducers here if needed
});

export default rootReducer;
