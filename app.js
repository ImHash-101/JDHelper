const express = require("express")
const router  = require("./router")
const { WEB_PORT } = require("./config/default")

const orm = require("orm")
const model = require("./model")
const app = express()
const error = require("./middleware/error")
const monitor = require("./middleware/monitor")
app.use(monitor())
//挂载数据库
app.use(model())
//解析body
app.use(express.json())
//挂载路由
app.use(router)
//错误处理
app.use(error())
//监听
app.listen(WEB_PORT,()=>{
    console.log('The serveice runing at http://localhost:%d',WEB_PORT)
})


