const express = require("express")
const userBase = express.Router()
const { getUserBase } = require("../controller/userBase")

userBase.post("/",getUserBase)


module.exports = userBase