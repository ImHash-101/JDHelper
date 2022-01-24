const { genToken,verfiyToken } = require("../util/jwt")
const Cookie = require("../util/Cookie")
const isLogin = require("../util/isLogin")
const { Op } = require("sequelize");
exports.genToken = async (req,res,next)=>{
    //从request获取信息
    const req_data = {
        pt_pin :req.body.pt_pin,
        pt_key :req.body.pt_key
    }    
    let cookie = new Cookie(req_data.pt_pin,req_data.pt_key) 

    const data = await isLogin(cookie.toString())
        .catch((err)=>{next(err)})
        
    //Cookie有效 islogin == 1 ，无效 == 0
    let islogin = await JSON.parse(data).islogin
    
    if(islogin==1){

       var userBase =await  req.sequelize.models.userBase.findOne({
            where:{
                pt_pin:{
                    [Op.eq]:cookie.pt_pin
                }
            }
        })

        if(!userBase){
            userBase = await req.sequelize.models.userBase.build(req_data)
            await userBase.save()
        }

        const token = await genToken(userBase.toJSON())
        res.status(200).json({
            token
        })
    }
    else{
        const err = new Error("Cookie 无效")
        err.code = 401
        next(err)
    }
}

exports.verfiyToken = (req,res)=>{
    res.status(200).end()
}