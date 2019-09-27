import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import changeReducer from './changeReducer';
import getAPIReducer from './getAPIReducer';
import clone from './clone';
const appReducer = combineReducers({
	simpleReducer,
    changeReducer,
    getAPIReducer,
    clone
})

const rootReducer = (state, action) => {
	return appReducer(state, action)
}


export default rootReducer