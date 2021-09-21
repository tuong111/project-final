
import { combineReducers } from 'redux';
import hosoReducer from './hoso';
import userReducer from './users';
import DetailInfoReducer from './detailInfo';
import cvListReducer from './cvlist';
import jobListReducer from './joblist';

const rootReducer = combineReducers({
    hoso : hosoReducer,
    user : userReducer,
    detailInfo : DetailInfoReducer,
    cvList : cvListReducer,
    jobList : jobListReducer
})

export default rootReducer;