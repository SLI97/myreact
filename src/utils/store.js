export const getStore = (key) => {
	return localStorage.getItem(key)
}

export const setStore = (key, value) => {
	return localStorage.setItem(key, value)
}

export const removeStore = (key) => {
	return localStorage.removeItem(key)
}

export const clearStore = () => {
	return localStorage.clear()
}
