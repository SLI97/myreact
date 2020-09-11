import {loginSuccess, loginError} from "../instance"

const initData = {
	loggedIn: false,
	message: '',
	user: {}
}

const login = (state = initData, action) => {
	const {payload} = action
	switch (action.type) {
		case loginSuccess:
			return {
				...state,
				loggedIn: true,
				message: '',
				user: payload
			}
		case loginError:
			return {
				...state,
				loggedIn: false,
				message: payload.message
			}
		default:
			return state
	}
}

export default login
