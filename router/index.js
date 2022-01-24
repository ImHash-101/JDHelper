const express = require("express")
// 路由
const router = express.Router()
const auth = require("./auth")
const userBase = require("./userBase")
const userInfo = require("./userInfo")
const beanInfo = require("./beanInfo")
const isOverdue = require("./isOverdue")
// 数据检验
const { verfiyValidations } = require("../validation/auth")
// 控制器
const { verfiyToken } =require("../controller/auth")
// 中间件
const  checkToken = require("../middleware/checkToken")

//token
router.use("/auth",auth)

// 检查Token
router.use(verfiyValidations,checkToken())

// -------以下需要token---------

router.post("/auth/verfiy",verfiyToken)

//用户信息

router.use("/userBase",userBase)

router.use("/userInfo",userInfo)

router.use("/beanInfo",beanInfo)

router.use("/isOverdue",isOverdue)

module.exports = router;