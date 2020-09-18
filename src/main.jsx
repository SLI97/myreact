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
import { ConnectedRouter,routerMiddleware } from 'connected-react-router'
import history from "@/actions/history";


const store = createStore(reducers, applyMiddleware(thunk, routerMiddleware(history)))

ReactDom.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<MyApp/>
		</ConnectedRouter>
	</Provider>,
	document.getElementById("app"))

if (module.hot) {
	module.hot.accept();
}
