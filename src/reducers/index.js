
import { combineReducers } from 'redux';
import hosoReducer from './hoso';
import userReducer from './users';
import DetailInfoReducer from './detailInfo';
import cvListReducer from './cvlist';

const rootReducer = combineReducers({
    hoso : hosoReducer,
    user : userReducer,
    detailInfo : DetailInfoReducer,
    cvList : cvListReducer
})

export default rootReducer;