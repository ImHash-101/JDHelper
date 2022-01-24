const express = require("express")
const UserInfo = express.Router()
const { getUserInfo } = require("../controller/userInfo")

UserInfo.post("/",getUserInfo)


module.exports = UserInfo