import React, {useState} from "react"
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link, NavLink, Switch,} from 'react-router-dom';
// import {Router, Route, Link, NavLink, Switch,} from 'react-router-dom';
import axios from "axios"
import Login from "@/pages/Login"
import history from "./actions/history"
import UserLayout from "@/layouts/UserLayout"
import BasicLayout from "@/layouts/BasicLayout"

export default class MyApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			login: '',
		};

		console.log(history)

	}

	render() {
		return (
			<Router>
				<Switch>
					<UserLayout path="/login" render={() => (<UserLayout/>)}>
						{/*<Route exact path="/login" render={() => (<Login/>)}/>*/}
						<Route exact path="/login" component={Login}/>
						<div>222</div>
					</UserLayout>
					{/*<UserLayout>*/}
					{/*<Route exact path="/login" component={Login}/>*/}
					{/*<div>222</div>*/}
					{/*</UserLayout>*/}
					<BasicLayout path="/home" render={() => (<BasicLayout/>)}>
						<div>hahaha</div>
						<Route exact path="/home" render={() => (<div>444</div>)}>
						</Route>
					</BasicLayout>
					{/*<Link to={"/"}>去Home</Link>*/}
					{/*<Link to={"/about"}>去About</Link>*/}
					{/*<Link to={"/haha"}>去Haha</Link>*/}
					{/*<Home qqq={111}/>*/}
					{/*<Switch>*/}
					{/*<Route exact path="/" component={Home} qqq={111}/>*/}
					{/*<Route exact path="/" component={Home} qqq={111}/>*/}
					{/*<Route exact path={"/about"} component={About}/>*/}
					{/*<Route exact path={"/haha"} render={()=><h2>我是渲染的haha</h2>}/>*/}
					{/*<Route  component={NotFound}/>*/}
					{/*</Switch>*/}
				</Switch>
			</Router>
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
