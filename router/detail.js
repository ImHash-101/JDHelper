const express = require("express")
const detail = express.Router()
const { getDetail } =require("../controller/detail")

detail.post("/",getDetail)


module.exports = detail