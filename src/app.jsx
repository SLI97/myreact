import React from "react"

export default class MyApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			flag: true,
			value: []
		}
		console.log(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	changeFlag = () => {
		this.setState({
			flag: !this.state.flag
		})
		// this.setState((state)=>(
		// 	{flag:!state.flag}
		// ))
	}

	creatComponents() {
		const creat = function (num) {
			return React.createElement('h' + num, {id: num + "myca", key: num}, "我是内容h" + num)
		}
		const arr = [creat(1), creat(2), creat(3), creat(4)]
		return arr
	}

	handleSubmit = (event) => {
		event.preventDefault()
		console.log("我提交了")
	}

	handleChange(event) {
		event.persist()
		// const value = event.target.value
		// // console.log(event.target.value)
		// const qqq = this.state.value.concat()
		// let index = this.state.value.findIndex(i => i === value)
		// if (index<0) {
		// 	qqq.push(value)
		// } else {
		// 	qqq.splice(index, 1)
		// }
		// // console.log(qqq)
		// this.setState((state) => {
		// 	return {
		// 		value: qqq
		// 	}
		// })
	}

	onSelect(event){
		console.log(event)
	}

	render() {
		return (
			<div>
				<h1>父亲传给我的长度{this.props.dataLength}</h1>
				<h2 onClick={this.changeFlag}>按我改变组件</h2>

				{/*<h3>父亲传给我的插槽内容</h3>*/}
				{/*{this.props.children}*/}

				{/*<h4>我是自己写的creat</h4>*/}
				{/*{*/}
				{/*this.creatComponents().map(i => i)*/}
				{/*}*/}
				<form onSubmit={this.handleSubmit}>
					{/*<label>*/}
					{/*名字:*/}
					{/*<textarea type="text" value={this.state.value} onChange={this.handleChange}/>*/}
					{/*</label>*/}
					<select value={this.state.value} multiple={true} onChange={this.handleChange} onSelect={this.onSelect}>
						<option value="grapefruit">葡萄柚</option>
						<option value="lime">酸橙</option>
						<option value="coconut">椰子</option>
						<option value="mango">芒果</option>
					</select>
					<input type="submit" value="提交"/>
				</form>
			</div>
		)
	}
}
