import {loginSuccess, loginError} from "../instance"
// import history from "./history"

export const login = (payload,history) => (dispatch) => {
	dispatch({type: "GET_LOGIN_REQUEST"})
	setTimeout(() => {
		console.log(history)
		// return ({
		// 	type: loginSuccess, payload: {'userName': 'admin'}
		// })
		dispatch({type: loginSuccess, payload: {'userName': 'admin'}})
		dispatch({type: "GET_LOGIN_SUCCESS"})
		// history.push('/home')
		history.push({pathname:"/home/"})
	}, 200)
}
