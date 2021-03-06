import login from './login'
import loading from './loading'
import menu from './menu'
import { combineReducers } from 'redux'
// import { combineReducers } from 'redux-immutable'
// import { connectRouter } from 'connected-react-router'
import { connectRouter, LOCATION_CHANGE } from "connected-react-router/immutable";
import history from "@/actions/history";

const reducers = combineReducers ({
	router: connectRouter(history),
	login,
	menu,
	loading,
})

export default reducers
