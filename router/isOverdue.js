const express = require("express")
const IsOverdue = express.Router()
const { getIsOverdue } = require("../controller/isOverdue")

IsOverdue.post("/",getIsOverdue)


module.exports = IsOverdue