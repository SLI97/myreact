import React from "react"
import {Layout, Spin, Form, Input, Button, Checkbox} from 'antd';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';

const {Header, Footer, Sider, Content} = Layout;
import "./styles/user.less"

const UserLayout = (props) => {

	const {children: childRoutes} = props
	return (
		<Layout className="full-layout user-layout fixed">
			<Content>
				<Switch>{childRoutes}</Switch>
			</Content>
		</Layout>
	)
}

export default UserLayout
