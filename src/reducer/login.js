import {loginSuccess, loginError} from '../instance'
import {fromJS,Map} from 'immutable'


const initData = fromJS({
	loggedIn: false,
	message: '',
	user: {},
	flag:false,
})

// const initData = {
// 	loggedIn: false,
// 	message: '',
// 	user: {},
// 	flag:false,
// }

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
		case 'AAA':
			// let obj = {
			// 	...state,
			// 	flag: !state.flag,
			// }
			return state.set('flag', !state.get('flag'))
		// return obj
		default:
			return state
	}
}

export default login
