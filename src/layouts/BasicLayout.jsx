import React from "react"
import cs from 'classnames';
import {Layout} from 'antd';
import NavBar from "@/components/NavBar"
import {getStore, setStore} from "@/utils/store"
import {LeftSideBar} from "@/components/SideBar";
import {getMenu} from "@/actions/menu";
import connect from "react-redux/es/connect/connect";
import "./styles/basic.less"
import RightSideBar from "@/components/SideBar/RightSideBar";
import SkinToolbox from "@/components/SkinToolbox";

const {Content, Header} = Layout;

const mapStateToProps = (state) => ({
	menu: state.menu.menu,
	flatMenu: state.menu.flatMenu,
})

const mapDispatchToProps = (dispatch) => ({
	getMenu: () => {
		dispatch(getMenu())
	}
})

@connect(mapStateToProps, mapDispatchToProps)
export default class BasicLayout extends React.PureComponent {
	constructor(props) {
		super(props);
		const user = JSON.parse(getStore('user')) || {
			age: 79,
			birthday: "1974-10-05",
			city: "北京 北京市",
			name: "袁洋",
			phone: "13576738397",
			token: "9BFF2780-a5BC-24b5-9EDa-e48b2218f73c",
			userName: "admin",
		};
		const theme = JSON.parse(getStore('theme')) || {
			leftSide: 'darkgrey', // 左边
			navbar: 'light' // 顶部
		};
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
			user,
			currentMenu: {},
			isMobile: false
		};

		props.getMenu()
	}

	/**
	 * 顶部左侧菜单图标收缩控制
	 */
	onCollapseLeftSide = _ => {
		const collapsedLeftSide =
			this.state.leftCollapsedWidth === 0
				? true
				: !this.state.collapsedLeftSide;
		const collapsedRightSide =
			this.state.collapsedRightSide || !collapsedLeftSide;

		this.setState({
			collapsedLeftSide,
			collapsedRightSide,
			leftCollapsedWidth: 60
		});
	};

	onChangeTheme = theme => {
		setStore('theme',JSON.stringify(theme))
		this.setState({
			theme
		});
	};

	render() {
		const {children: childRoutes, menu, flatMenu, location} = this.props
		console.log(menu)

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

		return (
			<Layout className={classnames}>
				<Header>
					<NavBar
						collapsed={collapsedLeftSide}
						onCollapseLeftSide={this.onCollapseLeftSide}
						// onExpandTopBar={this.onExpandTopBar}
						// toggleSidebarHeader={this.toggleSidebarHeader}
						theme={theme.navbar}
						user={user}
						// isMobile={isMobile}
					/>
					{childRoutes}
				</Header>
				<Layout>
					<LeftSideBar
						collapsed={collapsedLeftSide}
						leftCollapsedWidth={leftCollapsedWidth}
						// showHeader={showSidebarHeader}
						onCollapse={this.onCollapseLeftSide}
						// onCollapseAll={this.onCollapseLeftSideAll}
						location={location}
						theme={theme.leftSide}
						flatMenu={flatMenu}
						currentMenu={currentMenu}
						menu={menu}
						user={user}
						isMobile={isMobile}
					/>
					<Content>
					</Content>
					<RightSideBar>
					</RightSideBar>
					<SkinToolbox onChangeTheme={this.onChangeTheme} theme={theme} />
				</Layout>
			</Layout>
		)
	}
}
