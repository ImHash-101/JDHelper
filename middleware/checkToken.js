const { cookie } = require("request")
const { Op } = require("sequelize")
const Cookie = require("../util/Cookie")
const isLogin = require("../util/isLogin")
const { verfiyToken } =require("../util/jwt")
module.exports =(type)=>{
    switch(type){
        case 0:
            return async (req,res,next)=>{
                const result = verfiyToken(req.body.token)


                if(result==null){
                    const err = new Error("token无效")
                    err.code = 401
                    next(err)    
                    return                
                }

                const manager = await req.sequelize.models.manager.findOne({
                    while:{
                        id:result.id
                    }
                })
                if(manager){
                    req.manager = manager.toJSON()
                    next()
                }else{
                    const err = new Error(`用户${result.userName}不存在`)
                    err.code = 401
                    next(err)
                }

            }
        case 1:
            return async (req,res,next)=>{
                
                const result = verfiyToken(req.body.token)

                if(result==null){
                    const err = new Error("token无效")
                    err.code = 401
                    next(err)
                    return
                }
                const cookie = new Cookie(result.info.pt_pin,result.info.pt_key)

                const islogin = await isLogin(cookie.toString())

                if(islogin==0) {
                    const err = new Error("Cookie 已过期")
                    err.code = 401
                    next(err)
                    return
                }

                const userBase = await req.sequelize.models.userBase.findOne({
                    where:{
                        py_pin:result.pt_pin
                    }
                })
                if(userBase){
                    req.userBase = userBase.toJSON()
                    // console.log(req.userBase)
                    next()
    
                }else{
                    const err = new Error(`用户${result.pt_pin}不存在`)
                    err.code = 401
                    next(err)
                }
                
            }

    }

}