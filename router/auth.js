const express = require("express")
const auth = express.Router()
const { genTokenValidations } = require("../validation/auth")
const { genToken } =require("../controller/auth")


auth.post("/",genTokenValidations,genToken)

module.exports = auth;