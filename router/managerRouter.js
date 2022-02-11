const experss = require("express")

const router = experss.Router()

const { getManagerToken,verfiyToken } = require("../controller/token")
const checkToken = require("../middleware/checkToken")
const { needPasswd, needToken, needCookie, needQQNum } = require("../validation/token")
const { getAlloverdue } =require("../controller/manager/allOverdue")
const { bindQQ,updateKey } = require("../controller/manager/user")
const { getUserInfo,getBeanInfo } = require("../controller/manager/getInfo")


router.get("/token",needPasswd,getManagerToken)

router.use("/",needToken,checkToken(0))

router.post("/token",verfiyToken)

router.post("/user",needCookie,needQQNum,bindQQ)//添加用户

router.patch("/user",needCookie,updateKey)//更新用户

router.get("/allOverdue",getAlloverdue)//获取所以过期用户QQ

// router.get("/userInfo",needQQNum,getUserInfo)

// router.get("/beanInfo",needQQNum,getBeanInfo)

module.exports = router