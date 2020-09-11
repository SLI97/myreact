import React from "react"
import cs from 'classnames';
import { Layout } from 'antd';
import {NavBar} from "@/components/NavBar"


const { Content, Header } = Layout;


// import from "@/a"


export default class BasicLayout extends React.PureComponent {
	constructor(props){
		super(props);
		// const user = $$.getStore('user', []);
		// localStorage
		// const theme = $$.getStore('theme', {
		// 	leftSide: 'darkgrey', // 左边
		// 	navbar: 'light' // 顶部
		// });
		const theme = {}
		if (!theme.layout) {
			theme.layout = [
				'fixedHeader',
				'fixedSidebar',
				'fixedBreadcrumbs'
				// 'hidedBreadcrumbs',
				// 'tabLayout',
			];
		}
		this.state = {
			collapsedLeftSide: false, // 左边栏开关控制
			leftCollapsedWidth: 60, // 左边栏宽度
			expandTopBar: false, // 头部多功能区开合
			showSidebarHeader: false, // 左边栏头部开关
			collapsedRightSide: true, // 右边栏开关
			theme, // 皮肤设置
			// user,
			currentMenu: {},
			isMobile: false
		};
	}

	render(){
		const {children: childRoutes} = this.props

		const {
			collapsedLeftSide,
			leftCollapsedWidth,
			expandTopBar,
			showSidebarHeader,
			collapsedRightSide,
			theme,
			user,
			currentMenu,
			isMobile
		} = this.state;
		// const { routerData, location, global } = this.props;
		// const { menu, flatMenu } = global;
		// const { childRoutes } = routerData;
		const classnames = cs('basic-layout', 'full-layout', {
			fixed: theme.layout && theme.layout.indexOf('fixedSidebar') !== -1,
			'fixed-header':
				theme.layout && theme.layout.indexOf('fixedHeader') !== -1,
			'fixed-breadcrumbs':
				theme.layout && theme.layout.indexOf('fixedBreadcrumbs') !== -1,
			'hided-breadcrumbs':
				theme.layout && theme.layout.indexOf('hidedBreadcrumbs') !== -1
		});

		return(
			<Layout className={classnames}>
				<Header>
					<NavBar
						// collapsed={collapsedLeftSide}
						// onCollapseLeftSide={this.onCollapseLeftSide}
						// onExpandTopBar={this.onExpandTopBar}
						// toggleSidebarHeader={this.toggleSidebarHeader}
						// theme={theme.navbar}
						// user={user}
						// isMobile={isMobile}
					/>
					{childRoutes}
				</Header>
				<Layout>
				</Layout>
			</Layout>
		)
	}
}
