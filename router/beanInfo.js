const express = require("express")
const BeanInfo = express.Router()
const beanInfoCtr = require("../controller/beanInfo")

BeanInfo.post("/",beanInfoCtr)


module.exports = BeanInfo