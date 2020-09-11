import React, {Fragment} from "react"
import {Drawer, Button} from 'antd';

export default class LeftSideBar extends React.Component {

	constructor(props) {

	}

	render() {

		const visible = false
		// const [visible, setVisible] = useState(false);
		const showDrawer = () => {
			// setVisible(true);
		};
		const onClose = () => {
			// setVisible(false);
		};

		return (
			<Fragment>
				<Button type="primary" onClick={showDrawer}>
					Open
				</Button>
				<Drawer
					title="Basic Drawer"
					placement="right"
					closable={false}
					onClose={onClose}
					visible={visible}
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Drawer>
			</Fragment>
		)
	}
}
