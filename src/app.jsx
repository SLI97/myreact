import React, {Fragment, useState} from "react"
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link, NavLink, Switch,} from 'react-router-dom';
// import {Router, Route, Link, NavLink, Switch,} from 'react-router-dom';
import axios from "axios"
import Login from "@/pages/Login"
import history from "./actions/history"
import UserLayout from "@/layouts/UserLayout"
import BasicLayout from "@/layouts/BasicLayout"
import {setStore} from "@/utils/store"


export default class MyApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			login: '',
		};

		// console.log(history)
		console.log(this)

	}

	componentDidMount() {
		setStore("user", JSON.stringify({
			age: 79,
			birthday: "1974-10-05",
			city: "北京 北京市",
			name: "袁洋",
			phone: "13576738397",
			token: "9BFF2780-a5BC-24b5-9EDa-e48b2218f73c",
			userName: "admin",
		}))

		setStore("theme", JSON.stringify({
			leftSide: 'darkgrey', // 左边
			navbar: 'light' // 顶部
		}))
	}

	render() {
		return (
			<Fragment>
				{/*<Router>*/}
				<Switch>
					<UserLayout exact path="/login" component={UserLayout}>
						<Route exact path="/login" component={Login}/>
					</UserLayout>
					{/*<Route exact path="/login" component={UserLayout}>*/}
					{/*/!*<Route exact path="/login" component={Login}/>*!/*/}
					{/*</Route>*/}
					{/*<div>222</div>*/}
					{/*</UserLayout>*/}
					<BasicLayout exact path="/home" render={() => (<BasicLayout/>)}>

					</BasicLayout>
					<Route component={NotFound}/>
				</Switch>
				{/*</Router>*/}
			</Fragment>
		);
	}
}

function Home(props) {
	console.log(props)
	return (
		<h1>我是Home + {props.qqq}</h1>
	)
}

Home.propTypes = {
	qqq: PropTypes.number
}

function About() {
	return (
		<h1>我是About</h1>
	)
}

function NotFound() {
	return (
		<h1>我是NotFound</h1>
	)
}
