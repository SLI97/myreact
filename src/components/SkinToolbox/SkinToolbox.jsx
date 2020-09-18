import React from "react";
import cx from 'classnames';
import {Tabs} from "antd";
import Icon from "@/components/Icon/Icon";
import "./style/index.less"
import NavBarBox from "./NavBarBox";
import SideBarBox from "./SideBarBox";
import LayoutBox from "./LayoutBox";

const {TabPane} = Tabs

export default class SkinToolbox extends React.Component {
	state = {
		collapsed: true,
	}

	toggleSkinToolbox = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

	clearThemeStore = () => {

	}

	onChangeNavBarColor = (e)=>{
		this.props.onChangeTheme({
			...this.props.theme,
			navbar: e.target.value
		});
	}

	onChangeSideColor = (e)=>{
		this.props.onChangeTheme({
			...this.props.theme,
			leftSide: e.target.value
		});
	}

	onChangeLayout = (value)=>{
		this.props.onChangeTheme({
			...this.props.theme,
			layout: value
		});
	}

	render() {
		const {theme} = this.props;

		const classnames = cx('skin-toolbox', {
			'skin-toolbox-close': this.state.collapsed
		});

		return (
			<div className={classnames}>
				<div className="panel">
					<div className="panel-head" onClick={this.toggleSkinToolbox}>
            <span className="panel-icon">
              <Icon type="gear"/>
            </span>
						<span className="panel-title">设置您的主题</span>
					</div>
					<div className="panel-body">
						<Tabs defaultActiveKey="1" size="small">
							<TabPane tab="导航条" key="navbar">
								<h4>导航条样式</h4>
								<NavBarBox theme={theme} onChange={this.onChangeNavBarColor} />
							</TabPane>
							<TabPane tab="边栏" key="sidebar">
								<h4>边栏样式</h4>
								<SideBarBox theme={theme} onChange={this.onChangeSideColor} />
							</TabPane>
							<TabPane tab="布局" key="misc">
								<h4>布局样式</h4>
								<LayoutBox theme={theme} onChange={this.onChangeLayout} />
							</TabPane>
						</Tabs>
					</div>
					<div className="panel-footer">
						<a className="btn-primary" onClick={this.clearThemeStore}>清理存储</a>
					</div>
				</div>
			</div>
		)
	}
}
