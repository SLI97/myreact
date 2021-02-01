import {getMenuSuccess} from "../instance"
import {fromJS} from 'immutable'

const initData = {
	menu:[],
	flatMenu:[]
}

const menu = (state = initData, action) => {
	const {payload} = action
	switch (action.type) {
		case getMenuSuccess:
			return {
				...state,
				menu: payload,
				flatMenu: getFlatMenu(payload)
			}
		default:
			return state
	}
}

export function getFlatMenu(menus) {
	let menu = []
	menus.forEach(item=>{
		if(item.children){
			menu = menu.concat(getFlatMenu(item.children))
		}
		menu.push(item)
	})
	return menu
}

export default menu
