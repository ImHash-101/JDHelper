const { genToken,verfiyToken } = require("../util/jwt")

const token = genToken({
    data:"niHao",
    auth_level:2
})

console.log(token)

const result = verfiyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDEyOTYzNDJ9.TdoGtPRies3wt-eL_1jpLWvFAM1wtS_lISl4Qatys-s")

console.log(result)