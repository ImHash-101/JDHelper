const express = require("express")
const router = express.Router()
const auth = require("./auth")



// router.all("/",(req,res)=>{
//     res.send("Hello Nihao")
// })

router.use("/auth",auth)

module.exports = router;