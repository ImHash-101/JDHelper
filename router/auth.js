const express = require("express")
const auth = express.Router()
const { genTokenValidations,verfiyValidations } = require("../validation/auth")
const { genToken,verfiyToken } =require("../controller/auth")

auth.get("/",genTokenValidations,genToken)
auth.post("/",verfiyValidations,verfiyToken)



module.exports = auth;