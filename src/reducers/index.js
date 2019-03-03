import {combineReducers} from 'redux';
import counterReducer from './counterReducer';

// combine child reducers into a single reducer
export default combineReducers({
  counter: counterReducer
});
