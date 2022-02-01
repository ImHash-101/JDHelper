const { genToken,verfiyToken } = require("../util/jwt")
const Cookie = require("../util/Cookie")
const isLogin = require("../util/isLogin")
const { Op } = require("sequelize");
exports.getUserToken = async (req,res,next)=>{
    //从request获取信息
    const req_data = {
        pt_pin :req.body.pt_pin,
        pt_key :req.body.pt_key
    }    
    let cookie = new Cookie(req_data.pt_pin,req_data.pt_key) 

    const islogin = await isLogin(cookie.toString()).catch((err)=>{next(err)})
    
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
        }else{
            await userBase.update({
                ...req_data
            })
            userBase = await req.sequelize.models.userBase.findOne({
                where:{
                    pt_pin:{
                        [Op.eq]:cookie.pt_pin
                    }
                }
            })
        }

        const token = await genToken({
            type:1,
            info:userBase.toJSON()
        })
        res.status(200).json({
            code:200,
            message:"success",
            token
        })
    }
    else{
        const err = new Error("Cookie 已过期")
        err.code = 401
        next(err)
    }
}


exports.getManagerToken = async (req,res,next)=>{
    //从request获取信息
    const req_data = {
        userName :req.body.userName,
        passwd :req.body.passwd
    }
    
    const manager = await req.sequelize.models.manager.findOne({
        where:req_data
    })



    if(manager){
        const token = genToken({
            type:0,
            info:manager.toJSON()
        })

        res.status(200).json({
            code:200,
            message:"success",
            token
        })
    }else{
        const err = new Error("用户名或密码错误")
        err.code = 401
        next(err)
    }

}

exports.verfiyToken = (req,res)=>{
    console.log(req.manager||req.userBase)
    res.status(200).json({
        code:200,
        message:"ok",
    })
}