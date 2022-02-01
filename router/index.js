const experss = require("express")

const router = experss.Router()

const userRouter = require("./userRouter")
const managerRouter = require("./managerRouter")


router.use("/user",userRouter)

router.use("/manager",managerRouter)

module.exports = router