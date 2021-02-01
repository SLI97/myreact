import React, {useState, useEffect, useMemo, useCallback, useRef} from 'react'
import {Layout, Spin, Form, Input, Button, Checkbox} from 'antd'
import logoImg from '@/assets/images/logo1.png'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
// import "./index.styl"
import './index.less'
import {connect} from 'react-redux'
import {login} from '@/actions/login'
import {createLoadingSelector} from '@/reducer/loading'
import {withRouter} from 'react-router-dom'
import {getMenuSuccess} from '@/instance'

const {Content} = Layout

const mapStateToProps = (state) => ({
	login: state.login,
	loading: createLoadingSelector(['GET_LOGIN'])(state)
})

const mapDispatchToProps = (dispatch) => ({
	loginApi: (payload) => {
		login(payload)(dispatch)
	},
	qqq:(payload) => {
		return dispatch({type: payload, payload: null})
	},
})

const Login = (props) => {
	const [username, setUsername] = useState()
	const [password, setPassword] = useState()

	const onFinish = useCallback((values) => {
		console.log(values)
		// 	onFinish = (values) => {
// 		const {loginApi,history} = this.props
// 		loginApi({payload: values})
// 	}
	})

	useEffect(()=>{
		console.log('render',props.login,333)
	})

	const changeFlag = ()=>{
		props.qqq('AAA')
	}

	const {loading} = props
	const size = 'large'

	return (
		<Layout className="full-layout user-layout login-page">
			<Content>
				<button onClick={changeFlag}>按我{props.login.get('flag')?'是':'否'}</button>
				<Form
					name="basic"
					onFinish={onFinish}
					className="login-form"
					initialValues={{username: 'admin', password: 'admin', remember: true}}
					// onFinishFailed={onFinishFailed}
				>
					<div className="user-img">
						<img src={logoImg} alt="logo"/>
						<b>LANIF</b>
						<span>Admin</span>
					</div>
					<Form.Item
						name="username"
						rules={[{required: true, message: 'Please input your username!'}]}
					>
						<Input size={size} prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
					</Form.Item>

					<Form.Item
						name="password"
						rules={[{required: true, message: 'Please input your username!'}]}
					>
						<Input size={size} prefix={<LockOutlined className="site-form-item-icon"/>} type="password"
						       placeholder="密码"/>
					</Form.Item>

					<Form.Item
						name="remember"
						valuePropName="checked"
						noStyle
					>
						<Checkbox size={size}>记住我</Checkbox>
					</Form.Item>

					<Link className="login-form-forgot" to="#">
						忘记密码
					</Link>

					{/*<Spin tip="Loading..." spinning={loading}>*/}
					<Button loading={loading} size={size} type="primary" htmlType="submit" className="login-form-button">
						登录
					</Button>
					{/*</Spin>*/}
					<div className="new-user">
						新用户？<Link to="/sign/register">现在注册</Link>
					</div>
				</Form>
			</Content>
		</Layout>
	)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
