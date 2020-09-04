const http = require("http")
// const url = require("url")
// const querystring = require('querystring');
// http.createServer((req, res) => {
// 	// console.log(req)
// 	res.setHeader("Access-Control-Allow-Origin", "*")
// 	const obj = {
// 		name: "haha",
// 		age: 18
// 	}
// 	const str = JSON.stringify(obj)
// 	res.write(str)
// 	res.end()
// }).listen(3333, () => {
// 	console.log("服务启动")
// })
//
const express = require("express")
const app = express()
app.get("/api",(req,res)=>{
		const obj = {
		name: "haha",
		age: 18
	}
	res.json(obj)
	res.end()
})

app.listen(3333,()=>{
	console.log("服务启动")
})
