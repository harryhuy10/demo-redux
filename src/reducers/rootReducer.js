<<<<<<< HEAD
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


=======
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


>>>>>>> 380f9c6c77cd8be47e233f1cf96a19f1139a92c6
export default rootReducer