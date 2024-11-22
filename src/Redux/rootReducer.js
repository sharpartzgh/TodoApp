// rootReducer.js
// This file combines all the reducers in the application.
// In this project, we only have the todoSlice reducer.

import { combineReducers } from 'redux';
import todosReducer from '../Redux/slices/todoSlice';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;