import React from 'react'
import ReactDom from 'react-dom'
import MyApp from './app'
import './icons/index.css'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/assets/styles/index.less'
// import 'antd/dist/antd.css';
// import mockdata from "../mock"
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducer'
import thunk from 'redux-thunk'
// import {ConnectedRouter, routerMiddleware} from 'connected-react-router'
import { ConnectedRouter ,routerMiddleware } from "connected-react-router/immutable";
import history from '@/actions/history'

import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import {PersistGate} from 'redux-persist/lib/integration/react';
import immutableTransform from "redux-persist-transform-immutable";

const persistConfig = {
	transforms: [
		immutableTransform()
		// encryptor
	],
	key: 'root',
	storage: storage,
	// stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
}

const myPersistReducer = persistReducer(persistConfig, reducers)


// const store = createStore(reducers, applyMiddleware(thunk, routerMiddleware(history)))
const store = createStore(myPersistReducer, applyMiddleware(thunk, routerMiddleware(history)))

const persistor = persistStore(store)

ReactDom.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<ConnectedRouter history={history}>
				<MyApp/>
			</ConnectedRouter>
		</PersistGate>
	</Provider>,
	document.getElementById('app'))

if (module.hot) {
	module.hot.accept()
}
