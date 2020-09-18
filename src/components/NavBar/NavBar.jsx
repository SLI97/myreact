import React from "react"
import cx from 'classnames';
import {Link} from "react-router-dom";
import logoImg from '@/assets/images/logo.png';
import avatar from '@/assets/images/avatar.jpg';
import Icon from "@/components/Icon";
import "./index.less"
import screenfull from 'screenfull'
import {Avatar, Badge, Popover} from "antd";

export default class NavBar extends React.Component {

	toggleFullScreen() {
		screenfull.toggle()
	}

	render() {

		const {
			fixed,
			theme,
			onCollapseLeftSide,
			collapsed,
			onExpandTopBar,
			toggleSidebarHeader,
			user,
			isMobile
		} = this.props;

		const classnames = cx('navbar', {
			'navbar-fixed-top': !!fixed,
			'navbar-sm': isMobile ? true : collapsed,
			['bg-' + theme]: !!theme
		});

		return (
			<header className={classnames}>
				<div className="navbar-branding">
					<Link className="navbar-brand" to="/">
						<img src={logoImg} alt="logo"/>
						<b>LANIF</b>
						Admin
					</Link>
					<span className="toggle_sidemenu_l" onClick={onCollapseLeftSide}>
            <Icon type="lines"/>
          </span>
				</div>
				<ul className="nav navbar-nav navbar-left clearfix">
					{collapsed || isMobile ? null : (
						<li>
							<a className="sidebar-menu-toggle" onClick={toggleSidebarHeader}>
								<Icon type="ruby"/>
							</a>
						</li>
					)}
					<li>
						<a onClick={onExpandTopBar}>
							<Icon type="wand"/>
						</a>
					</li>
					{isMobile ? (
						<li className="mini-search" onClick={this.onOpenSearchBox}>
							<a>
								<Icon type="search" antd/>
							</a>
						</li>
					) : (
						<li onClick={this.toggleFullScreen}>
							<a className="request-fullscreen">
								<Icon type="screen-full"/>
							</a>
						</li>
					)}
				</ul>
				{isMobile ? null : (
					<form className="navbar-form navbar-search clearfix">
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								placeholder="全文检索"
								onClick={this.onOpenSearchBox}
							/>
						</div>
					</form>
				)}
				<ul className="nav navbar-nav navbar-right clearfix">
					<li>
						<a href="https://github.com/LANIF-UI/dva-boot-admin">
							<Icon type="GithubOutlined" antd/>
						</a>
					</li>
					<li className="dropdown">
						<Popover
							placement="bottomRight"
							title={'通知'}
							overlayClassName={cx('navbar-popup', {[theme]: !!theme})}
							content={''}
							trigger="click"
						>
							<a className="dropdown-toggle">
								<Icon type="radio-tower"/>
							</a>
						</Popover>
					</li>
					<li className="dropdown">
						<Popover
							placement="bottomRight"
							title={`WELCOME ${user.userName}`}
							overlayClassName={cx('navbar-popup', {[theme]: !!theme})}
							content={<UserDropDown/>}
							trigger="click"
						>
							<a className="dropdown-toggle">
								<Badge dot>
								<Avatar src={avatar}>
								{user.userName}
								</Avatar>
								</Badge>
							</a>
						</Popover>
					</li>
				</ul>
			</header>
		)
	}
}


const UserDropDown = props => (
	<ul className="dropdown-menu list-group dropdown-persist">
		<li className="list-group-item">
			<a className="animated animated-short fadeInUp">
				<Icon type="mail"/> 信息
				<Badge count={5} className="label"/>
			</a>
		</li>
		<li className="list-group-item">
			<a className="animated animated-short fadeInUp">
				<Icon type="users"/> 好友
				<Badge count={6} className="label"/>
			</a>
		</li>
		<li className="list-group-item">
			<a className="animated animated-short fadeInUp">
				<Icon type="gear"/> 帐户设置
			</a>
		</li>
		<li className="list-group-item">
			<a className="animated animated-short fadeInUp">
				<Icon type="ring"/> 通知
			</a>
		</li>
		<li className="list-group-item dropdown-footer">
			<Link to="/login">
				<Icon type="poweroff"/> 退出
			</Link>
		</li>
	</ul>
);
