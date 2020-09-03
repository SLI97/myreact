import React from "react"
import ReactDom from "react-dom"
import MyApp from "./app"

const haha = React.createElement("div",{},"12312312321321")

ReactDom.render(
	// haha,
	<MyApp dataLength={6}><h4>h4h4h4h4</h4><h3>h3h3h3h3h3</h3></MyApp>,
	document.getElementById("app")
)

if (module.hot) {
	module.hot.accept();
}
