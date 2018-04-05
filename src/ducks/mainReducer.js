import { combineReducers } from 'redux';
import workHistoryReducer from './workHistoryReducer';
import userReducer from './userReducer';

export default combineReducers({
    workHistory: workHistoryReducer,
    users: userReducer
})