const experss = require("express")

const router = experss.Router()

const { getManagerToken,verfiyToken } = require("../controller/token")
const checkToken = require("../middleware/checkToken")
const { needPasswd, needToken, needCookie, needQQNum } = require("../validation/token")
const { getAlloverdue } =require("../controller/manager/allOverdue")
const { addUser } = require("../controller/manager/addUser")
const { getUserInfo,getBeanInfo } = require("../controller/manager/getInfo")

router.get("/token",needPasswd,getManagerToken)

router.use("/",needToken,checkToken(0))

router.post("/token",needToken,verfiyToken)

router.post("/user",needCookie,addUser)

router.get("/allOverdue",getAlloverdue)

router.get("/userInfo",needQQNum,getUserInfo)

router.get("/beanInfo",needQQNum,getBeanInfo)

module.exports = router