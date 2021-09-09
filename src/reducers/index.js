
import { combineReducers } from 'redux';
import hosoReducer from './hoso';
import userReducer from './users';

const rootReducer = combineReducers({
    hoso : hosoReducer,
    user : userReducer
})

export default rootReducer;