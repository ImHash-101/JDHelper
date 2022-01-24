const express = require("express")
const UserInfo = express.Router()
const userInfoCtr = require("../controller/userInfo")

UserInfo.post("/",userInfoCtr)


module.exports = UserInfo