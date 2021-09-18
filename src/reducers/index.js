
import { combineReducers } from 'redux';
import hosoReducer from './hoso';
import userReducer from './users';
import DetailInfoReducer from './detailInfo';

const rootReducer = combineReducers({
    hoso : hosoReducer,
    user : userReducer,
    detailInfo : DetailInfoReducer
})

export default rootReducer;