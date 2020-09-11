import login from './login'
import loading from './loading'
import { combineReducers } from 'redux'

const reducers = combineReducers ({
	login,
	loading
})

export default reducers
