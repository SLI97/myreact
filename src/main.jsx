import React from "react"
import ReactDom from "react-dom"
import MyApp from "./app"
import "./icons/index.css"
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/assets/styles/index.less';
// import 'antd/dist/antd.css';
// import mockdata from "../mock"
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import reducers from "./reducer"
import thunk from "redux-thunk"


const store = createStore(reducers, applyMiddleware(thunk))

ReactDom.render(
	<Provider store={store}>
		<MyApp></MyApp>
	</Provider>,
	document.getElementById("app"))

if (module.hot) {
	module.hot.accept();
}
