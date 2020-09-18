import {loginSuccess, loginError} from "../instance"
import { push } from 'react-router-redux'

export const login = ({payload}) => (dispatch) => {
	dispatch({type: "GET_LOGIN_REQUEST"})
	setTimeout(() => {
		dispatch({type: loginSuccess, payload: {'userName': 'admin'}})
		dispatch({type: "GET_LOGIN_SUCCESS"})
		dispatch(push('/home'))
	}, 1000)
}
