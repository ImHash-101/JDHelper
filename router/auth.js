const express = require("express")
const auth = express.Router()
const { genTokenValidations,verfiyValidations } = require("../validation/auth")
const { genToken,verfiyToken } =require("../controller/auth")


auth.post("/",genTokenValidations,genToken)


module.exports = auth;