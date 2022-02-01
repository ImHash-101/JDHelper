const express = require("express")
const router  = require("./router")
const { WEB_PORT, HOST } = require("./config")

const model = require("./model")
const app = express()
const error = require("./middleware/error")

const fs = require('fs')
const morgan = require('morgan')
const path = require('path')
 
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

//挂载数据库
app.use(model())
//解析body
app.use(express.urlencoded())
app.use(express.json())
//挂载路由
app.use(router)
//错误处理
app.use(error())
//监听
app.listen(WEB_PORT,HOST,()=>{
    console.log('The serveice runing at http://%s:%d',HOST,WEB_PORT)
})