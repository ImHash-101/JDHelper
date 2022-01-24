const jwt = require("jsonwebtoken")
const { PRIVATE_KEY } = require("../config")

exports.genToken = (data,privateKey=PRIVATE_KEY)=>{
    return jwt.sign(data,privateKey)
}
exports.verfiyToken = (data,privateKey=PRIVATE_KEY)=>{
    var result = null
    try{
        result = jwt.verify(data,privateKey)
    }catch(err){
        console.error(err.message)
    }
    return result
}