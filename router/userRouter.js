const experss = require("express")

const router = experss.Router()
const { getUserToken,verfiyToken } =require("../controller/token")
const { needCookie, needToken } = require("../validations")
const checkToken = require("../middleware/checkToken")

const { getUserInfo, getBeanInfo } = require("../controller/user/getInfo")

router.get("/token",needCookie,getUserToken)

router.use("/",needToken,checkToken(1))

router.post("/token",verfiyToken)

router.get("/userInfo",needToken,getUserInfo)

router.get("/beanInfo",needToken,getBeanInfo)

module.exports = router