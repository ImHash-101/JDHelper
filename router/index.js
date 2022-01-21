const express = require("express")
const router = express.Router()
const auth = require("./auth")
const detail = require("./detail")
const { verfiyValidations } = require("../validation/auth")
const { verfiyToken } =require("../controller/auth")
const  checkToken = require("../middleware/checkToken")


//token
router.use("/auth",auth)

router.use(verfiyValidations,checkToken())


// ------**-以下需要token-**--------

router.post("/auth/verfiy",verfiyToken)


//用户信息
router.use("/detail",detail)


module.exports = router;