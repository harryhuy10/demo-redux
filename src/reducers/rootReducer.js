import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import changeReducer from './changeReducer';
import getAPIReducer from './getAPIReducer';

const appReducer = combineReducers({
	simpleReducer,
    changeReducer,
    getAPIReducer
})

const rootReducer = (state, action) => {
	return appReducer(state, action)
}


export default rootReducer