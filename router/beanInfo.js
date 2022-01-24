const express = require("express")
const BeanInfo = express.Router()
const { getBeanInfo } = require("../controller/beanInfo")

BeanInfo.post("/",getBeanInfo)


module.exports = BeanInfo