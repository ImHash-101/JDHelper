const express = require("express")
const userBase = express.Router()
const userBaseCtr = require("../controller/userBase")

userBase.post("/",userBaseCtr)


module.exports = userBase