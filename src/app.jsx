import React, {useState} from "react"
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';
import axios from "axios"

export default class MyApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			login: '',
		};

	}

	componentDidMount() {
		console.log("我挂载了")
	}

	render() {
		return (
			<div>
				<h1>路由！</h1>
				<Router>
					<NavLink
						to="/about"
						isActive={() => true}
						activeStyle={{
							fontWeight: 'bold',
							color: 'red'
						}}
					>Event 123</NavLink>
					<Link to={"/"}>去Home</Link>
					<Link to={"/about"}>去About</Link>
					<Link to={"/haha"}>去Haha</Link>
					<Home qqq={111}/>
					<Switch>
						<Route exact path="/" component={Home} qqq={111}/>
						<Route exact path={"/about"} component={About}/>
						<Route exact path={"/haha"} render={()=><h2>我是渲染的haha</h2>}/>
						<Route  component={NotFound}/>
					</Switch>
				</Router>
			</div>
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
	qqq:PropTypes.string
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
