const { Op } = require("sequelize")
const { verfiyToken } =require("../util/jwt")
module.exports =()=>{
    return async (req,res,next)=>{
        const result = verfiyToken(req.body.token)
        if(result){
            const userBase = await req.sequelize.models.userBase.findOne({
                where:{
                    id:{
                        [Op.eq]:result.id
                    }
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
        }else{
            const err = new Error("token无效")
            err.code = 401
            next(err)
        } 
    }
}