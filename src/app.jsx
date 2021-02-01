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
	}

	componentDidMount() {
		class Person {
			@readonly
			first = 123
			last = 456
			// @readonly
			// name() { return `${this.first} ${this.last}` }
		}

		function readonly(target, name, descriptor,haha){
			// descriptor对象原来的值如下
			// {
			//   value: specifiedFunction,
			//   enumerable: false,
			//   configurable: true,
			//   writable: true
			// };
			console.log(target,name,descriptor,haha)
			descriptor.writable = false;
			return descriptor;
		}

		const p1 = new Person()
		// console.log(p1.name())

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
